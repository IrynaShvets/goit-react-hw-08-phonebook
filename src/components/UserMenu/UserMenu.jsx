import { useDispatch, useSelector } from 'react-redux';
import { Avatar, Stack, Button } from '@mui/material';
import { getUserName } from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
import { Container, Name } from './UserMenu.styled';
import stringToColor from '../../helper/stringToColor';

function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);

  const stringAvatar = name => {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
  };

  return (
    <Container>
      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar(name)} />
      </Stack>
      <Name>
        Hello, <br />
        {name}
      </Name>

      <Button
        color="secondary"
        sx={{ mr: 4, ml: 2 }}
        variant="outlined"
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LogOut
      </Button>
    </Container>
  );
}

export default UserMenu;
