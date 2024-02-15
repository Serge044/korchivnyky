import React, { useState } from "react";
import styles from "./offers.module.css";

function Offers() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add form submission logic here
    console.log("Form submitted:", formData);
    clearForm();
  };

  const clearForm = () => {
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };
  return (
    <div className={styles["main-container"]}>
      <h3 className={styles.title}>Є пропозиції?</h3>
      <p>
        Ми завжди раді співпраці і відкриті для комунікації, звʼяжіться з нами
        будь яким зручнимдля вас способом або залишіть повідомлення через форму
        нижче:
      </p>
      <div className={styles["form-container"]}>
        <div className={styles.form}>
          <form onSubmit={handleSubmit}>
            <div className={styles["name-and-email-container"]}>
              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor="name"
                >
                  Ваше імʼя:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={styles.name}
                />
              </div>

              <div style={{ marginBottom: "15px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={styles.email}
                />
              </div>
            </div>

            <div style={{ marginBottom: "15px" }}>
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="message"
              >
                Повідомлення:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className={styles.message}
              />
            </div>

            <button type="submit" className={styles.button}>
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Offers;
