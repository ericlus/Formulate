"use client";

import { BsTextParagraph } from "react-icons/bs";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
} from "../FormElements";
import { Label } from "../ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import useDesigner from "../hooks/useDesigner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Textarea } from "../ui/textarea";

const type: ElementsType = "ParagraphField";

const extraAttributes = {
  text: "Text here",
};

const propertiesSchema = z.object({
  text: z.string().min(2).max(500),
});

export const ParagraphFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: BsTextParagraph,
    label: "Paragraph Field",
  },
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerComponent: DesignerComponent,
  propertiesComponent: PropertiesComponent,
  formComponent: FormComponent,
  validate: () => true,
};

type DesignerComponentProps = {
  elementInstance: FormElementInstance;
};

type CustomElementInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({ elementInstance }: DesignerComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { text } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-1">
      <Label className="font-bold text-xs text-muted-foreground">
        Paragraph field
      </Label>
      <p>{text}</p>
    </div>
  );
}

type PropertiesFormSchemaType = z.infer<typeof propertiesSchema>;

type PropertiesComponentProps = {
  elementInstance: FormElementInstance;
};

function PropertiesComponent({ elementInstance }: PropertiesComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { updateElement } = useDesigner();
  const form = useForm<PropertiesFormSchemaType>({
    resolver: zodResolver(propertiesSchema),
    mode: "onChange",
    defaultValues: {
      text: element.extraAttributes.text,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: PropertiesFormSchemaType) {
    const { text } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        text,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onChange={form.handleSubmit(applyChanges)}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormField
          control={form.control}
          name="text"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Text</FormLabel>
              <FormControl>
                <Textarea
                  {...field}
                  rows={5}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
}

type FormComponentProps = {
  elementInstance: FormElementInstance;
};

function FormComponent({ elementInstance }: FormComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { text } = element.extraAttributes;

  return <p>{text}</p>;
}
