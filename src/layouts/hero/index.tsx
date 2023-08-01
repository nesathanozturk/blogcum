import { Typography } from "@mui/material";
import { Section, Title, Subtitle, BtnLink } from "../../styles/Hero.styled";

const Hero = () => {
  return (
    <Section>
        <Title>Keşfetmeye Hazır mısınız?</Title>
        <Subtitle>İlham Veren İçeriklerle Dolu Bir Blog Deneyimi Sizi Bekliyor!</Subtitle>
        <Typography sx={{  color: "#f4f4f4f4", marginBottom: "0.5em",  fontSize: { xs: "1.1rem", md: "1.4rem" }, fontWeight: 800, lineHeight: 1.5  }}>Blogumuzda ilgi çekici makaleler, bilgi dolu içerikler ve güncel konularla dolu bir dünya sizi bekliyor. Keşfetmek isteyeceğiniz seyahat, teknoloji ve daha birçok konuda derinlemesine analizler sunuyoruz. Bilgiye doyacağınız, eğlenceli ve aydınlatıcı bir okuma deneyimi için hemen başlayın!</Typography>
        <BtnLink title="Başlayın!" to="/sign-in">Başlayın!</BtnLink>
    </Section>
  )
}

export default Hero;