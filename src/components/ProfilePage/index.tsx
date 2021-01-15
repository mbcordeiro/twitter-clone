import React from 'react';

import {
  Container,
  Banner,
  Avatar,
  ProfileData,
  LocationIcon,
  Followage,
  EditButton,
} from './styles';

const ProfilePage: React.FC = () => {
  return (
    <Container>
      <Banner>
        <Avatar />

        <ProfileData>
          <EditButton outlined>Editar Perfil</EditButton>
          <h1>Matheus Cordeiro</h1>
          <h2>@mbcordeiro20</h2>
          <p>Software developer</p>
          <ul>
            <li>
              <LocationIcon />
              Blumenau - SC, Brasil
            </li>
          </ul>
          <Followage>
            <span>
              seguindo <strong>1</strong>
            </span>
            <span>
              <strong>20 </strong> seguidores
            </span>
          </Followage>
        </ProfileData>
      </Banner>
    </Container>
  );
};

export default ProfilePage;
