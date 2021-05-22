import * as Yup from "yup";

export const validationSearchByControl = Yup.object({
  bussines: Yup.string().required("Introduzca una empresa"),
  numberControl: Yup.number().typeError("Solo se admiten números"),
});
