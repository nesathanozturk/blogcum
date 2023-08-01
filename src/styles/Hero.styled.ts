import { Box } from "@mui/material";
import styled from "styled-components";

import { breakpoints } from "../theme";

export const Section = styled(Box)({
 flexDirection: "column",
 display: "flex",
 justifyContent: "center",
 alignItems: "center",
 gap: "1rem",
 marginTop: "4em",
 padding: "0 2.2em",
 color: "#fff",
 textAlign: "center",
});

const GradientText = styled.h1`
background: linear-gradient(to right, #f32170,
    #ff6b08, #cf23cf, #eedd44);
 -webkit-text-fill-color: transparent;
 -webkit-background-clip: text;
 font-weight: 800;
`;

export const Title = styled(GradientText)`
 margin-bottom: 0.3em;
 font-size: 2rem;

 @media ${breakpoints.xl} {
 font-size: 3rem;
 }
`;

export const Subtitle = styled(GradientText)`
font-family: 'Arial', sans-serif;
margin-bottom: 0.5em;
font-size: 1.3rem;

@media ${breakpoints.xl} {
    font-size: 2rem;
}
`;

export const Link = styled.a`
position: relative;
padding: 0.3em 0.6em;
background: #fff;
color: #000;
font-size: 1.1rem;
letter-spacing: 2px;
text-decoration: none;
border: 3px solid;
cursor: pointer;
box-shadow: 1px 1px 0px 0px, 2px 2px 0px 0px, 3px 3px 0px 0px, 4px 4px 0px 0px, 5px 5px 0px 0px;
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;

&:active {
 box-shadow: 0px 0px 0px 0px;
 top: 5px;
 left: 5px;
}

@media ${breakpoints.xl} {
    font-size: 1.3rem;
    padding: 0.4em 0.8em;
}
`;