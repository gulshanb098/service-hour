import React from "react";
import ContactSection from "./ContactSection";
import HeaderSection from "./HeaderSection";
import HoursSection from "./HoursSection";

const SupplyHouseComponent: React.FC = () => {
  return (
    <div style={styles.wrapper}>
      <div style={styles.container}>
        <HeaderSection />
        <ContactSection />
        <HoursSection />
      </div>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
  },
  container: {
    width: "500px",
    borderRadius: "8px",
    overflow: "hidden",
    boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
  },
};

export default SupplyHouseComponent;
