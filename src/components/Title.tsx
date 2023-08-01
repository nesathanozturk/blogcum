import { SectionTitle } from "../styles/Blog.styled";

import { ITitle } from "../types";

const Title: React.FC<ITitle> = ({ title }) => {
  return (
    <>
      <SectionTitle>{title}</SectionTitle>
    </>
  );
};

export default Title;
