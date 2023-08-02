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
} from "../../styles/Form.styled";

const SignIn = () => {
  return (
    <FormSection>
      <FormContainer>
        <Title>Giriş Yap</Title>
        <form>
          <FormGroup>
            <Label htmlFor="username">Kullanıcı Adınız</Label>
            <Input
              type="text"
              id="username"
              name="username"
              placeholder="mehmetcan"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email Adresiniz</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="örnek@gmail.com"
              required
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Şifreniz</Label>
            <Input
              type="password"
              id="password"
              name="password"
              placeholder="*******"
              required
            />
          </FormGroup>
          <Button type="submit">Gönder</Button>
          <AccountMessage>
            Hesabınız yok mu? <SignInLink to="/sign-up">Kayıt olun!</SignInLink>
          </AccountMessage>
        </form>
      </FormContainer>
    </FormSection>
  );
};

export default SignIn;
