import ProfileBox from "../../components/ProfileBox";
import Title from "../../components/Title";

import { ProfileSection } from "../../styles/Profile.styled";

const Profile = () => {
  return (
    <ProfileSection>
      <Title title="Profil" />
      <ProfileBox />
    </ProfileSection>
  );
};

export default Profile;
