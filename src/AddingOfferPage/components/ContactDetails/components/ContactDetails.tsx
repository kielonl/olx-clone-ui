import { useState } from "react";
import {
  EMAIL_VALID,
  PHONE_NUMBER_VALID,
} from "../../../../constants/REGEX_PATTERNS";
import { FormComponent } from "../../FormComponent";
import "../styles/ContactDetails.scss";

export const ContactDetails = () => {
  const [email, setEmail] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  return (
    <FormComponent>
      <div className="contact-details-main">
        <h2>Dane Konaktowe</h2>

        <div>Adres e-mail</div>
        <input
          type="text"
          onChange={(e) => setEmail(e.target.value)}
          style={
            EMAIL_VALID.test(email)
              ? { borderBottom: "2px solid green" }
              : { borderBottom: "2px solid red" }
          }
        />

        <div>Numer telefonu</div>
        <input
          type="text"
          onChange={(e) => setPhoneNumber(e.target.value)}
          defaultValue={"+48"}
          style={
            PHONE_NUMBER_VALID.test(phoneNumber)
              ? { borderBottom: "2px solid green" }
              : { borderBottom: "2px solid red" }
          }
        />
      </div>
    </FormComponent>
  );
};
