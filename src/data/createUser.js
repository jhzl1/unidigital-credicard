import * as Yup from "yup";

export const gruopsUser = [
  {
    value: "value1",
    label: "Administradores",
  },
  {
    value: "value2",
    label: "Analistas Ciclo",
  },
  {
    value: "value3",
    label: "Analista Documentos",
  },
  {
    value: "value4",
    label: "Analista Libro Ventas",
  },
  {
    value: "value5",
    label: "Desbloquear PDF",
  },
  {
    value: "value6",
    label: "Indicadores",
  },
  {
    value: "value7",
    label: "Ver Copia PDF",
  },
  {
    value: "value8",
    label: "Ver Detalle",
  },
  {
    value: "value9",
    label: "Ver Original PDF",
  },
  {
    value: "value10",
    label: "Ver XML",
  },
];

export const validationSchema = Yup.object({
  email: Yup.string()
    .lowercase()
    .email("No es un email válido")
    .required("El email es obligatorio"),
  password: Yup.string()
    .required("La contraseña es obligatoria")
    .oneOf([Yup.ref("repeatPassword")], "Las contraseñas no son iguales")
    .min(8, "Se requieren al menos 8 caracteres"),
  repeatPassword: Yup.string()
    .required("La contraseña es obligatoria")
    .oneOf([Yup.ref("password")], "Las contraseñas no son iguales"),
  name: Yup.string()
    .required("Ingrese un nombre")
    .min(3, "El nombre es muy corto"),
  surname: Yup.string().required("Ingrese un apellido"),
  group: Yup.array().required("Seleccione un grupo"),
});

export const initialValues = {
  email: "",
  password: "",
  repeatPassword: "",
  name: "",
  surname: "",
  group: "",
};
