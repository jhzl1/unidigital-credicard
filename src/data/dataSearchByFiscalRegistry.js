import * as Yup from "yup";

export const validationSearchByFiscalRegistry = Yup.object({
  CompanyStrongId: Yup.string().required().typeError("Elija una empresa"),
  FiscalRegistry: Yup.string()
    .required()
    .typeError("El RIF o cédula es requerido"),
});

export const initialValues = {
  CompanyStrongId: "",
  FiscalRegistry: "",
  dateEmisionFrom: "",
  dateEmisionTo: "",
};
