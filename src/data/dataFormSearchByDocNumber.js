import * as Yup from "yup";

export const initialValues = {
  Number: "",
  CompanyStrongId: "",
  ProductStrongId: "",
};

export const validationSearchByDocNumber = Yup.object({
  CompanyStrongId: Yup.string().required("Elija una empresa"),
  Number: Yup.string().required("Escriba un número de control"),
  ProductStrongId: Yup.string().required("Elija un tipo de documento"),
});
