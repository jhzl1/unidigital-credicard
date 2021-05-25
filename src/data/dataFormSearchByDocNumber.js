import * as Yup from "yup";

export const validationSearchByDocNumber = Yup.object({
  CompanyStrongId: Yup.string().required("Introduzca una empresa"),
  Number: Yup.number().typeError("Solo se admiten números"),
  ProductStrongId: Yup.string().required("Seleccione un tipo de documento"),
});
