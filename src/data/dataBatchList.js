import * as Yup from "yup";

export const initialValues = {
  Number: "",
  CompanyStrongId: "",
};

export const validationBatchList = Yup.object({
  Number: Yup.number()
    .typeError("Solo se admiten números")
    .required("El número de control es requerido"),
  CompanyStrongId: Yup.string().required("Elija una empresa"),
});
