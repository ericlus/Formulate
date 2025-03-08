"use client";

import { LuSeparatorHorizontal } from "react-icons/lu";
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
import { Slider } from "../ui/slider";

const type: ElementsType = "SpacerField";

const extraAttributes = {
  height: 20, //px
};

const propertiesSchema = z.object({
  height: z.number().min(5).max(200),
});

export const SpacerFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: LuSeparatorHorizontal,
    label: "Spacer Field",
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
  const { height } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-1 items-center">
      <Label className="font-bold text-xs text-muted-foreground">
        Spacer field: {height}px
      </Label>
      <LuSeparatorHorizontal className="!h-5 !w-5" />
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
      height: element.extraAttributes.height,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: PropertiesFormSchemaType) {
    const { height } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        height,
      },
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-6"
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <FormField
          control={form.control}
          name="height"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Height (px): {form.watch("height")}</FormLabel>
              <FormControl className="pt-2">
                <Slider
                  defaultValue={[field.value]}
                  min={5}
                  max={200}
                  step={1}
                  onValueChange={(value) => {
                    field.onChange(value[0]);
                  }}
                  onPointerUp={() => {
                    form.handleSubmit(applyChanges)();
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
  const { height } = element.extraAttributes;

  return <div style={{ height, width: "100%" }} />;
}
