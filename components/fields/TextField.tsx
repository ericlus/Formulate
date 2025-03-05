"use client";

import { MdTextFields } from "react-icons/md";
import {
  ElementsType,
  FormElement,
  FormElementInstance,
  SubmitInputFunction,
} from "../FormElements";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import useDesigner from "../hooks/useDesigner";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Switch } from "../ui/switch";

const type: ElementsType = "TextField";

const extraAttributes = {
  label: "Text field",
  helperText: "Helper text",
  required: false,
  placeHolder: "Value here...",
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
  placeHolder: z.string().max(50),
});

export const TextFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: MdTextFields,
    label: "TextField",
  },
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerComponent: DesignerComponent,
  propertiesComponent: PropertiesComponent,
  formComponent: FormComponent,
};

type DesignerComponentProps = {
  elementInstance: FormElementInstance;
};

type CustomElementInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({ elementInstance }: DesignerComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { label, helperText, required, placeHolder } = element.extraAttributes;
  return (
    <div className="flex flex-col gap-2">
      <Label className="font-bold">
        {label}
        {required && "*"}
      </Label>
      <Input readOnly disabled placeholder={placeHolder} />
      {helperText && (
        <p className="text-muted-foreground text-xs">{helperText}</p>
      )}
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
      label: element.extraAttributes.label,
      helperText: element.extraAttributes.helperText,
      required: element.extraAttributes.required,
      placeHolder: element.extraAttributes.placeHolder,
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: PropertiesFormSchemaType) {
    const { label, helperText, placeHolder, required } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
        placeHolder,
        required,
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
          name="label"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Label</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The label of the field.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="placeHolder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Placeholder</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The placeholder of the field.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="helperText"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Helper text</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormDescription>The helper text of the field.</FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="required"
          render={({ field }) => (
            <FormItem className="flex items-center justify-between rounded-lg border p-3">
              <div className="space-y-0.5">
                <FormLabel>Required</FormLabel>
                <FormDescription>The required of the field.</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
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
  submitInputValue?: SubmitInputFunction;
};

function FormComponent({
  elementInstance,
  submitInputValue,
}: FormComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { label, helperText, required, placeHolder } = element.extraAttributes;

  const [inputValue, setInputValue] = useState("");

  return (
    <div className="flex flex-col gap-2">
      <Label className="font-bold">
        {label}
        {required && "*"}
      </Label>
      <Input
        placeholder={placeHolder}
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        onBlur={(e) => {
          if (!submitInputValue) {
            return;
          }
          submitInputValue(element.id, e.target.value);
        }}
      />
      {helperText && (
        <p className="text-muted-foreground text-xs">{helperText}</p>
      )}
    </div>
  );
}
