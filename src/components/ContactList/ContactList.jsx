import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import { FiDelete } from 'react-icons/fi';
import { MdContactPhone } from 'react-icons/md';
import { useGetContactsByNameQuery } from '../../redux/contacts/contacts-api';
import { getFilter } from '../../redux/contacts/contacts-selectors';
import {
  List,
  Item,
  Text,
  ContactWrapper,
  ChangeColor,
  Image,
} from './ContactList.styled';
/* import ContactImage from '../../images/user2.jpg'; */

const ContactList = ({ onDeleteContact }) => {
  const { data: contacts } = useGetContactsByNameQuery();
  const filter = useSelector(getFilter);

  const getVisibleContacts = useMemo(() => {
    const normalizeFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizeFilter),
    );
  }, [filter, contacts]);

  return (
    <>
      {/*  <Image src={ContactImage} alt="alt" /> */}
      {contacts && (
        <List>
          {getVisibleContacts.map(({ id, name, number }) => (
            <Item key={id}>
              <ContactWrapper>
                <ChangeColor>
                  <MdContactPhone
                    style={{
                      width: 40,
                      height: 40,
                      marginRight: 20,
                    }}
                  />
                </ChangeColor>
                <Text>{name}:</Text>
                <Text>{number}</Text>
              </ContactWrapper>
              <ChangeColor>
                <FiDelete
                  onClick={() => {
                    onDeleteContact(id);
                    toast.warn(`${name} deleted from contacts.`);
                  }}
                  style={{
                    width: 40,
                    height: 40,
                  }}
                />
              </ChangeColor>
            </Item>
          ))}
        </List>
      )}
    </>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      phone: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func,
};
