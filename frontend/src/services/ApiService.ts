import axios from 'axios';
import { ServiceHour } from '../models/ServiceHour';

export const SupplyHouseService = async (): Promise<ServiceHour[]> => {
    const apiEndPoint = 'http://localhost:8080/api';
    const supplyHouseEndpoint = `${apiEndPoint}/serviceHours/`;

    try {
        const response = await axios.get<ServiceHour[]>(supplyHouseEndpoint);
        return response.data;
    } catch (error) {
        console.error('Error fetching service hours:', error);
        throw error;
    }
};
