import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const StyledLink = styled(Link)`
color: #fff;
font-weight: 600;
text-decoration: underline;
transition: color 0.1s ease-in-out;

&:hover {
   color: #bbb;
}
`;
