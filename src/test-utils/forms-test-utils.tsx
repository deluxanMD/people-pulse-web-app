import React from "react";
import PPForm from "../components/forms/pp-form/pp-form.component";
import { Button } from "@mui/material";

type FormWrapperProps = {
  children: React.ReactNode;
  formMethods: any;
};

export const FormWrapper = ({ children, formMethods }: FormWrapperProps) => {
  return (
    <PPForm
      formMethods={formMethods}
      onSubmit={formMethods.handleSubmit(() => null)}
      data-testid="TestForm"
    >
      {children}
      <Button type="submit" data-testid="TestForm.Button">
        Submit
      </Button>
    </PPForm>
  );
};
