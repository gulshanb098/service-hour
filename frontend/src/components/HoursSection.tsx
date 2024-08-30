import React, { useEffect, useState } from "react";
import { ServiceHour } from "../models/ServiceHour";
import { SupplyHouseService } from "../services/ApiService";

const HoursSection: React.FC = () => {
  const [serviceHours, setServiceHours] = useState<ServiceHour[]>();

  useEffect(() => {
    if (serviceHours) {
      return;
    }
    (async () => {
      const response = await SupplyHouseService();
      setServiceHours(response);
    })();
  }, [serviceHours]);

  if (!serviceHours || serviceHours.length === 0) {
    return <>No Service Hours</>;
  }

  const convertTo12HourFormat = (time24: string) => {
    const [hours, minutes] = time24.split(":").map(Number);
    const period = hours >= 12 ? "pm" : "am";
    const hours12 = (hours % 12 || 12).toString();
    return `${hours12}:${minutes.toString().padStart(2, "0")}${period}`;
  };

  const specialHours = serviceHours.filter((s) => s.hourType === "SPECIAL");
  const weekendHours = serviceHours.filter((s) => s.hourType === "WEEKEND");
  const regularHours = serviceHours.filter((s) => s.hourType === "REGULAR");
  const frequentChangedHours = serviceHours.filter(
    (s) => s.hourType === "REGULARCHANGED"
  );

  return (
    <div style={styles.container}>
      {specialHours.length > 0 && (
        <p style={styles.specialHours}>
          Special Hours
          <br />
          {convertTo12HourFormat(specialHours[0].openingTime)} -
          {convertTo12HourFormat(specialHours[0].closingTime)}
        </p>
      )}

      {regularHours.length > 0 && (
        <p style={styles.regularHours}>
          {regularHours.map((e) => e.day).join(", ")}
          <br />
          {convertTo12HourFormat(regularHours[0].openingTime)} -
          {convertTo12HourFormat(regularHours[0].closingTime)}
        </p>
      )}
      {frequentChangedHours.length > 0 && (
        <p style={styles.regularHours}>
          {frequentChangedHours.map((e) => e.day).join(", ")}
          <br />
          {convertTo12HourFormat(frequentChangedHours[0].openingTime)} -
          {convertTo12HourFormat(frequentChangedHours[0].closingTime)}
        </p>
      )}
      {weekendHours.length > 0 && (
        <p style={styles.regularHours}>
          {weekendHours.map((e) => e.day).join(", ")}
          <br />
          {convertTo12HourFormat(weekendHours[0].openingTime)} -
          {convertTo12HourFormat(weekendHours[0].closingTime)}
        </p>
      )}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    backgroundColor: "#FADADD",
    padding: "15px",
    textAlign: "center",
    color: "#333",
  },
  specialHours: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "15px",
  },
  regularHours: {
    fontWeight: "bold",
    marginBottom: "10px",
  },
};

export default HoursSection;
