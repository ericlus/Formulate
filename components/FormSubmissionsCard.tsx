import React from "react";
import { ElementsType } from "./FormElements";
import { Card, CardContent, CardFooter } from "./ui/card";
import { format, formatDistance } from "date-fns";
import { Checkbox } from "./ui/checkbox";

type FormSubmissionCardProps = {
  cardSections: {
    id: string;
    label: string;
    required: boolean;
    type: ElementsType;
  }[];
  submission: {
    id: number;
    createdAt: Date;
    content: string;
  };
};

type FormContent = {
  [sectionId: string]: string;
};

function FormSubmissionsCard({
  cardSections,
  submission,
}: FormSubmissionCardProps) {
  const { createdAt, content } = submission;
  const formContent = JSON.parse(content) as FormContent;

  const getFormContentById = (id: string, type: ElementsType) => {
    const value = formContent[id];
    if (!value) {
      return;
    }
    if (type === "DateField") {
      const date = new Date(value);
      return <p className="text-sm">{format(date, "MM/dd/yyyy")}</p>;
    }
    if (type === "CheckboxField") {
      const checked = value === "true";
      return <Checkbox checked={checked} disabled />;
    }
    return <p className="text-sm">{value}</p>;
  };

  return (
    <Card className="flex flex-col justify-between">
      <CardContent className="flex flex-col gap-6 pt-6">
        {cardSections.map(({ id, label, required, type }) => (
          <div key={id} className="flex flex-col gap-1">
            <h2 className="text-sm font-semibold">
              {label}
              {required && "*"}
            </h2>
            {formContent[id].length > 0 && getFormContentById(id, type)}
          </div>
        ))}
      </CardContent>
      <CardFooter className="flex justify-end">
        <div className="text-muted-foreground text-sm">
          {formatDistance(createdAt, new Date(), { addSuffix: true })}
        </div>
      </CardFooter>
    </Card>
  );
}

export default FormSubmissionsCard;
