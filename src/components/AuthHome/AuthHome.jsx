import {
  Container,
  Wrapper,
  Logo,
  LogoPhone,
  Image,
  CardImage,
  ImageSubtitle,
  Subtitle,
} from './AuthHome.styled';
import VolunteerActivismRoundedIcon from '@mui/icons-material/VolunteerActivismRounded';
import Footer from '../Footer/Footer';
import Love from '../../images/home.jpg';

function AuthHome() {
  return (
    <>
      <Wrapper>
        {' '}
        <Container>
          <LogoPhone>
            <VolunteerActivismRoundedIcon sx={{ fontSize: 100 }} />
          </LogoPhone>
          <Logo>
            Phone<LogoPhone>Book</LogoPhone>
          </Logo>
        </Container>
        <CardImage>
          {/*  https://pixabay.com/get/g9fa48eaefdd502f2b93d6ceda7b71b2c0efa1c7e52fe946417a3da8aab11f40ea2fb18e6ac3b34d9c50b3895b024b1a3610c097b53b3801da4a7ebad8fa4a473_1920.jpg */}
          <Image src={Love} alt="I love phone." />
          <ImageSubtitle>
            <Subtitle>
              You've never created a phonebook so fast before. Really. Try to
              use our website.
            </Subtitle>
          </ImageSubtitle>
        </CardImage>
      </Wrapper>
      <Footer />
    </>
  );
}
/*  width="2000"
        height="600" */
export default AuthHome;
