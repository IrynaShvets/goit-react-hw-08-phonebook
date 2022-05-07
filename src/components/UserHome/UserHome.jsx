import UserImage from '../../images/user.jpg';
import { Image } from './UserHome.styled';

function UserHome() {
  return (
    <div>
      <Image src={UserImage} alt="alt" />
    </div>
  );
}

export default UserHome;
