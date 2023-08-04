import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { schema } from "../schemas";

import { IForm, IFormProp } from "../types";

import {
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  AccountMessage,
  SignInLink,
  ErrorMessage,
} from "../styles/Form.styled";
import { PageContainer } from "../styles/Container.styled";

const FormComponent: React.FC<IFormProp> = ({
  handleForm,
  formTitle,
  altMessage,
  link,
  linkText,
}) => {
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
    const { email, password } = data;

    handleForm(email, password);
  };

  return (
    <>
      <PageContainer>
        <FormContainer>
          <Title>{formTitle}</Title>
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
            <Button type="submit">{formTitle}</Button>
            <AccountMessage>
              {altMessage} <SignInLink to={link}>{linkText}</SignInLink>
            </AccountMessage>
          </form>
        </FormContainer>
      </PageContainer>
    </>
  );
};
export default FormComponent;
