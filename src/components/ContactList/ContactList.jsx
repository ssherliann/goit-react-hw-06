import { useSelector } from 'react-redux';
import Contact from '../Contact/Contact';
import { selectContacts } from '../../redux/contactsSlice'; 
import { selectNameFilter } from '../../redux/filtersSlice'; 
import styles from "./ContactList.module.css";

const ContactList = () => {
    const contacts = useSelector(selectContacts);
    const nameFilter = useSelector(selectNameFilter); 

    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(nameFilter.toLowerCase())
    );

    return (
        <div className={styles.contactListContainer}>
            {filteredContacts.map(({ id, name, number }) => (
                <Contact key={id} id={id} name={name} number={number} />
            ))}
        </div>
    );
};

export default ContactList;


