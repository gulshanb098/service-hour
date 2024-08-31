import axios from "axios";
import { ServiceHour } from "./../models/ServiceHour";

const serviceHourJson: { data: ServiceHour[] } = {
  data: [
    {
      id: 1,
      date: "2024-08-26",
      day: "MONDAY",
      openingTime: "08:00:00",
      closingTime: "19:45:00",
      shortMessage: "Regular hours",
      hourType: "REGULAR",
    },
    {
      id: 2,
      date: "2024-09-27",
      day: "TUESDAY",
      openingTime: "08:00:00",
      closingTime: "19:45:00",
      shortMessage: "Regular hours",
      hourType: "REGULAR",
    },
    {
      id: 3,
      date: "2024-09-28",
      day: "WEDNESDAY",
      openingTime: "08:00:00",
      closingTime: "19:45:00",
      shortMessage: "Regular hours",
      hourType: "REGULAR",
    },
    {
      id: 4,
      date: "2024-09-29",
      day: "THURSDAY",
      openingTime: "08:00:00",
      closingTime: "19:45:00",
      shortMessage: "Regular hours",
      hourType: "REGULAR",
    },
    {
      id: 5,
      date: "2024-08-31",
      day: "FRIDAY",
      openingTime: "09:00:00",
      closingTime: "17:45:00",
      shortMessage: "Regular weekend hours",
      hourType: "REGULARCHANGED",
    },
    {
      id: 6,
      date: "2024-09-01",
      day: "SATURDAY",
      openingTime: "09:00:00",
      closingTime: "17:45:00",
      shortMessage: "Regular weekend hours",
      hourType: "WEEKEND",
    },
    {
      id: 7,
      date: "2024-09-02",
      day: "SUNDAY",
      openingTime: "10:00:00",
      closingTime: "16:00:00",
      shortMessage: "Regular weekend hours",
      hourType: "WEEKEND",
    },
    {
      id: 7,
      date: null,
      day: null,
      openingTime: "10:00:00",
      closingTime: "16:00:00",
      shortMessage: "Special hours",
      hourType: "SPECIAL",
    },
  ],
};

export const SupplyHouseService = async (): Promise<ServiceHour[]> => {
  const apiEndPoint = "http://localhost:8080/api";
  const supplyHouseEndpoint = `${apiEndPoint}/serviceHours/`;

  try {
    // const response = await axios.get<ServiceHour[]>(supplyHouseEndpoint);
    // return response.data;
    return serviceHourJson.data; // using hardcoded json instead of API call
  } catch (error) {
    console.error("Error fetching service hours:", error);
    throw error;
  }
};
