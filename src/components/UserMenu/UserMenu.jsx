import { useDispatch, useSelector } from 'react-redux';
import { getUserName } from '../../redux/auth/auth-selectors';
import operations from '../../redux/auth/auth-operations';
/* import defaultAvatar from './default-avatar.png'; */

import { Container, Name } from './UserMenu.styled';
import { Button } from '@mui/material';
/* import Button from './UserMenu.styled'; */
/* 
const styles = {
  avatar: {
    marginRight: 4,
  },
};
 */

import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string) {
  let hash = 0;
  let i;

  /* eslint-disable no-bitwise */
  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }

  return color;
}

/* function stringAvatar(name) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}
 */
/* function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar('Kent Dodds')} />
      <Avatar {...stringAvatar('Jed Watson')} />
      <Avatar {...stringAvatar('Tim Neutkens')} />
    </Stack>
  );
} */
export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  /*  const avatar = defaultAvatar; */
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
      {/*   <img src={avatar} alt="" width="32" style={styles.avatar} /> */}

      <Stack direction="row" spacing={2}>
        <Avatar {...stringAvatar(name)} />
      </Stack>
      <Name>
        Hello, <br />
        {name}
      </Name>
      {/*   <Name>Hello, {name}</Name> */}
      <Button
        /* sx={{ color: 'secondary.main' }} */
        color="secondary"
        sx={{ mr: 4, ml: 2 }}
        variant="outlined"
        type="button"
        onClick={() => dispatch(operations.logOut())}
      >
        LogOut
      </Button>
      {/* <button type="button" onClick={() => dispatch(operations.logOut())}>
        LogOut
      </button> */}
    </Container>
  );
}

/* 
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

function stringToColor(string: string) {
  let hash = 0;
  let i;

  for (i = 0; i < string.length; i += 1) {
    hash = string.charCodeAt(i) + ((hash << 5) - hash);
  }

  let color = '#';

  for (i = 0; i < 3; i += 1) {
    const value = (hash >> (i * 8)) & 0xff;
    color += `00${value.toString(16)}`.slice(-2);
  }


  return color;
}

function stringAvatar(name: string) {
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
  };
}

export default function BackgroundLetterAvatars() {
  return (
    <Stack direction="row" spacing={2}>
      <Avatar {...stringAvatar('Kent Dodds')} />
      <Avatar {...stringAvatar('Jed Watson')} />
      <Avatar {...stringAvatar('Tim Neutkens')} />
    </Stack>
  );
} */
