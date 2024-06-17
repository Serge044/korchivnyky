import React, { useState } from 'react';
import styles from './Offers.module.css';

function Offers() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className={styles['main-container']}>
      <h3 className={styles.title}>Є пропозиції?</h3>
      <p className={styles.description}>
        Ми завжди раді співпраці і відкриті для комунікації, звʼяжіться з нами
        будь-яким зручним для вас способом або залишіть повідомлення через форму
        нижче:
      </p>

      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.inputGroup}>
          <label htmlFor='name'>Ваше імʼя:</label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='email'>Email:</label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className={styles.inputGroup}>
          <label htmlFor='message'>Повідомлення:</label>
          <textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <button type='submit'>Submit</button>
      </form>

      <div className={styles.instagramSection}>
        <p>Ви також можете зв'язатися з нами через Instagram:</p>
        <a
          href='https://www.instagram.com/korchivnyky/'
          target='_blank'
          rel='noopener noreferrer'
          className={styles.instagramLink}
        >
          Зв'язатися через Instagram
        </a>
      </div>
    </div>
  );
}

export default Offers;
