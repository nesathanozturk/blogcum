import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../../schemas";

import { IForm } from "../../types";

import {
  FormSection,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  AccountMessage,
  SignInLink,
  ErrorMessage,
} from "../../styles/Form.styled";

const SignUp = () => {
  const form = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: IForm) => {
    console.log(data);
  };

  return (
    <FormSection>
      <FormContainer>
        <Title>Kayıt Ol</Title>
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormGroup>
            <Label htmlFor="username">Kullanıcı Adınız</Label>
            <Input
              type="text"
              id="username"
              placeholder="mehmetcan"
              {...register("username")}
            />
            <ErrorMessage>{errors.username?.message}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Adresiniz</Label>
            <Input
              type="email"
              id="email"
              placeholder="örnek@gmail.com"
              {...register("email")}
            />
            <ErrorMessage>{errors.email?.message}</ErrorMessage>
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Şifreniz</Label>
            <Input
              type="password"
              id="password"
              placeholder="*******"
              {...register("password")}
            />
            <ErrorMessage>{errors.password?.message}</ErrorMessage>
          </FormGroup>
          <Button type="submit">Gönder</Button>
          <AccountMessage>
            Zaten bir hesabınız var mı?{" "}
            <SignInLink to="/sign-in">Giriş yapın!</SignInLink>
          </AccountMessage>
        </form>
      </FormContainer>
    </FormSection>
  );
};

export default SignUp;
