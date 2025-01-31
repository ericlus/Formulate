import React from "react";
import PreviewDialogButton from "./PreviewDialogButton";
import SaveFormButton from "./SaveFormButton";
import PublishFormButton from "./PublishFormButton";

type FormBuilderHeaderProps = {
  formName: string;
  isPublished: boolean;
};

function FormBuilderHeader({ formName, isPublished }: FormBuilderHeaderProps) {
  return (
    <nav className="flex justify-between border-b-2 p-4 gap-3 items-center">
      <h2 className="truncate font-medium">
        <span className="text-muted-foreground mr-2">Form:</span>
        {formName}
      </h2>
      <div className="flex items-center gap-2">
        <PreviewDialogButton />
        {!isPublished && (
          <>
            <SaveFormButton />
            <PublishFormButton />
          </>
        )}
      </div>
    </nav>
  );
}

export default FormBuilderHeader;
