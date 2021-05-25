import * as Yup from "yup";

export const validationSearchByFiscalRegistry = Yup.object({
  companies: Yup.string().required().typeError("Seleccione una empresa"),
  fiscalRegistry: Yup.string().required("El RIF o cédula es requerido"),
});

export const initialValues = {
  companies: "",
  fiscalRegistry: "",
  dateEmisionFrom: "",
  dateEmisionTo: "",
};
