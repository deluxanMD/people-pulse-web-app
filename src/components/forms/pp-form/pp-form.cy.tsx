import { useForm } from "react-hook-form";
import PPForm from "./pp-form.component";

const Testcomponent = ({ devTool = false }: { devTool?: boolean }) => {
  const form = useForm();

  return (
    <PPForm formMethods={form} devTool={devTool}>
      <input />
    </PPForm>
  );
};

describe("<PPForm />", () => {
  it("should load the form", () => {
    cy.mount(<Testcomponent />);
    cy.findByTestId("PPForm").should("exist");
  });

  it("should load dev tools", () => {
    cy.mount(<Testcomponent devTool={true} />);
    cy.get('button[title="Show dev panel"]').should("exist");
  });
});
