import * as Yup from "yup";

export const validationSearchByProduct = Yup.object({
  CompanyStrongId: Yup.string().required().typeError("Elija una empresa"),
  ProductStrongId: Yup.string()
    .required()
    .typeError("Elija un tipo de documento"),
});
