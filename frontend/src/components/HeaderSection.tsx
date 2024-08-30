import React from "react";

const HeaderSection: React.FC = () => {
  return (
    <div style={styles.container}>
      <img src="/female.png" alt="Customer Support" style={styles.image} />
      <p style={styles.question}>Questions?</p>
      <p style={styles.description}>
        Our Customer Support will be opening late today. We apologize for any
        inconvenience.
      </p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#FADADD",
    textAlign: "center",
    padding: "20px",
  },
  image: {
    borderRadius: "50%",
    marginBottom: "10px",
  },
  question: {
    fontWeight: "bold",
    marginBottom: "5px",
  },
  description: {
    fontSize: "12px",
    color: "#666",
  },
};

export default HeaderSection;
