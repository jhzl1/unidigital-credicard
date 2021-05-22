import * as Yup from "yup";

export const validationSearchByFiscalRegistry = Yup.object({
  bussines: Yup.string().required("Introduzca una empresa"),
  fiscalRegistry: Yup.number()
    .typeError("Solo se admiten números")
    .required("El RIF o cédula es requerido"),
});

export const initialValues = {
  bussines: "",
  fiscalRegistry: "",
  dateEmisionFrom: "",
  dateEmisionTo: "",
};
