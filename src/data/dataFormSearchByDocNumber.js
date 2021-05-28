import * as Yup from "yup";

export const initialValues = {
  Number: "",
  CompanyStrongId: "",
  ProductStrongId: "",
};

export const validationSearchByDocNumber = Yup.object({
  CompanyStrongId: Yup.string().required("Elija una empresa"),
  Number: Yup.number().typeError("Solo se admiten números"),
  ProductStrongId: Yup.string().required("Elija un tipo de documento"),
});
