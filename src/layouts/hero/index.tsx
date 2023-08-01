import { Section, Title, Subtitle, Description, Link } from "../../styles/Hero.styled";

const Hero = () => {
  return (
    <Section>
        <Title>Keşfetmeye Hazır mısınız?</Title>
        <Subtitle>İlham Veren İçeriklerle Dolu Bir Blog Deneyimi Sizi Bekliyor!</Subtitle>
        <Description>Blogumuzda ilgi çekici makaleler, bilgi dolu içerikler ve güncel konularla dolu bir dünya sizi bekliyor. Keşfetmek isteyeceğiniz seyahat, teknoloji ve daha birçok konuda derinlemesine analizler sunuyoruz. Bilgiye doyacağınız, eğlenceli ve aydınlatıcı bir okuma deneyimi için hemen başlayın!</Description>
        <Link title="Başlayın!" href="/login" rel="noopener noreferrer">Başlayın!</Link>
    </Section>
  )
}

export default Hero;