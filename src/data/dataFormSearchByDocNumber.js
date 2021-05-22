import * as Yup from "yup";

export const validationSearchByDocNumber = Yup.object({
  bussines: Yup.string().required("Introduzca una empresa"),
  numberDocument: Yup.number().typeError("Solo se admiten números"),
});
