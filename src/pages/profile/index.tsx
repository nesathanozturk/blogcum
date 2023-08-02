import Footer from "../../layouts/footer";
import Header from "../../layouts/header";

import ProfileBox from "../../components/ProfileBox";
import Title from "../../components/Title";

import { ProfileSection } from "../../styles/Profile.styled";

const Profile = () => {
  return (
    <>
      <Header />
      <ProfileSection>
        <Title title="Profil" />
        <ProfileBox />
      </ProfileSection>
      <Footer />
    </>
  );
};

export default Profile;
