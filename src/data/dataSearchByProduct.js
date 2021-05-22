import * as Yup from "yup";

export const validationSearchByProduct = Yup.object({
  bussiness: Yup.string().required().typeError("Elija una empresa"),
  typeOfDocument: Yup.string()
    .required()
    .typeError("Escoja un tipo de documento"),
});
