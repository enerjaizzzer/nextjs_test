import React from 'react';
import Image from "next/image";
import styles from './contacts.module.css'

const Contacts: React.FC = () => {
  return (
    <div className={styles.contactsContainer}>
      <h1 className={styles.title}>Aleksandr Liakhovets</h1>
      <Image src={'/avatar.jpg'} width={300} height={300} alt={'alt'} className={styles.avatar} />
    </div>
  );
};

export default Contacts;