import * as Yup from "yup";

export const schema = Yup.object({
  username: Yup.string()
    .required("Kullanıcı adı zorunludur!")
    .min(3, "Kullanıcı adı en az 3 karakterli olmalıdır!")
    .matches(
      /^[a-zA-Z0-9]+$/,
      "Kullanıcı adı 3-16 karakterli olmalı ve özel karakter içermemelidir!"
    ),
  email: Yup.string()
    .required("Email adresi zorunludur!")
    .email("Geçersiz email!"),
  password: Yup.string()
    .required("Şifre zorunludur!")
    .min(8, "Şifre en az 8 karakterli olmalıdır!"),
});
