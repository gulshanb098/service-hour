import React from "react";

const ContactSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <ContactDetail
        icon="📞"
        text="Call 888-551-7600"
        availability="Available 8am"
      />
      <ContactDetail
        icon="💬"
        text="Text 888-551-7600"
        availability="Available 8am"
      />
      <ContactDetail icon="💻" text="Live Chat" availability="Available 8am" />
      <ContactDetail icon="✉️" text="Email" availability="Response by Sun" />
    </div>
  );
};

interface Props {
  icon: string;
  text: string;
  availability: string;
}

const ContactDetail: React.FC<Props> = ({
  icon,
  text,
  availability,
}: Props) => {
  return (
    <div style={styles.detail}>
      <span style={styles.icon}>{icon}</span>
      <div>
        <p style={styles.text}>{text}</p>
        <p style={styles.availability}>{availability}</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: "#E7F3FF",
    padding: "15px",
  },
  detail: {
    display: "flex",
    alignItems: "center",
    paddingLeft: "150px",
    marginBottom: "10px",
  },
  icon: {
    fontSize: "20px",
    marginRight: "10px",
  },
  text: {
    margin: "0",
    fontWeight: "bold",
  },
  availability: {
    margin: "0",
    fontSize: "12px",
    color: "#666",
  },
};

export default ContactSection;
