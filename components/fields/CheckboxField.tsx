"use client";

import { IoMdCheckbox } from "react-icons/io";
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
import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";

const type: ElementsType = "CheckboxField";

const extraAttributes = {
  label: "Checkbox field",
  helperText: "Helper text",
  required: false,
};

const propertiesSchema = z.object({
  label: z.string().min(2).max(50),
  helperText: z.string().max(200),
  required: z.boolean().default(false),
});

export const CheckboxFieldFormElement: FormElement = {
  type,
  designerButtonElement: {
    icon: IoMdCheckbox,
    label: "Checkbox Field",
  },
  construct: (id: string) => ({
    id,
    type,
    extraAttributes,
  }),
  designerComponent: DesignerComponent,
  propertiesComponent: PropertiesComponent,
  formComponent: FormComponent,
  validate: (formElement: FormElementInstance, currentValue: string) => {
    const element = formElement as CustomElementInstance;
    if (element.extraAttributes.required) {
      return currentValue === "true";
    }
    return true;
  },
};

type DesignerComponentProps = {
  elementInstance: FormElementInstance;
};

type CustomElementInstance = FormElementInstance & {
  extraAttributes: typeof extraAttributes;
};

function DesignerComponent({ elementInstance }: DesignerComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { label, helperText, required } = element.extraAttributes;
  const id = `checkbox-${element.id}`;
  return (
    <div className="flex gap-2.5">
      <Checkbox id={id} />
      <div className="flex flex-col gap-1">
        <Label className="font-bold" htmlFor={id}>
          {label}
          {required && "*"}
        </Label>
        {helperText && (
          <p className="text-muted-foreground text-xs">{helperText}</p>
        )}
      </div>
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
    },
  });

  useEffect(() => {
    form.reset(element.extraAttributes);
  }, [element, form]);

  function applyChanges(values: PropertiesFormSchemaType) {
    const { label, helperText, required } = values;
    updateElement(element.id, {
      ...element,
      extraAttributes: {
        label,
        helperText,
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
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
              </FormControl>
              <FormDescription>The label of the field.</FormDescription>
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
                <Input
                  {...field}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.currentTarget.blur();
                    }
                  }}
                />
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
  isInvalid?: boolean;
  defaultValue?: string;
};

function FormComponent({
  elementInstance,
  submitInputValue,
  isInvalid,
  defaultValue,
}: FormComponentProps) {
  const element = elementInstance as CustomElementInstance;
  const { label, helperText, required } = element.extraAttributes;

  const [inputValue, setInputValue] = useState(
    defaultValue === "true" ? true : false
  );
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(!!isInvalid);
  }, [isInvalid]);

  const id = `checkbox-${element.id}`;

  return (
    <div className="flex gap-2.5">
      <Checkbox
        id={id}
        checked={inputValue}
        onCheckedChange={(checked) => {
          const value = checked ? true : false;
          setInputValue(value);
          if (!submitInputValue) {
            return;
          }
          const stringValue = value ? "true" : "false";
          const valid = CheckboxFieldFormElement.validate(element, stringValue);
          setError(!valid);
          submitInputValue(element.id, stringValue);
        }}
      />
      <div className="flex flex-col gap-1">
        <Label
          className={cn("font-bold", error && "text-red-500")}
          htmlFor={id}
        >
          {label}
          {required && "*"}
        </Label>
        {helperText && (
          <p className="text-muted-foreground text-xs">{helperText}</p>
        )}
      </div>
    </div>
  );
}
