import {
  SignUpSection,
  FormContainer,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  AccountMessage,
  SignInLink,
} from "../../styles/SignUp.styled";

export default function SignUp() {
  return (
    <SignUpSection>
      <FormContainer>
        <Title>Kayıt Ol</Title>
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
            Zaten bir hesabınız var mı?{" "}
            <SignInLink to="/sign-in">Giriş Yapın!</SignInLink>
          </AccountMessage>
        </form>
      </FormContainer>
    </SignUpSection>
  );
}
