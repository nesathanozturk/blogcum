import { StyledFooter, StyledLink } from '../../styles/Footer.styled';

const Footer = () => {
  return (
   <StyledFooter>
   <p>
     Made with ❤️ by{" "}
     <StyledLink
       href="https://www.github.com/nesathanozturk"
       rel="noopener noreferrer"
     >
       Neşathan Öztürk
     </StyledLink>
   </p>
 </StyledFooter>
  )
}

export default Footer;