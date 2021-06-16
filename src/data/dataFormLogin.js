import * as Yup from "yup";

export const initialValuesLogin = {
  UserName: "",
  Password: "",
};

export const validationLogin = Yup.object({
  UserName: Yup.string()
    .lowercase()
    .email("No es un email válido")
    .required("El email es requerido"),
  Password: Yup.string().required("Ingrese su contraseña"),
});
