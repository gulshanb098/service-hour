package com.example.backend.Services;

import java.time.LocalDate;
import java.util.List;

import com.example.backend.Models.ServiceHour;

public interface ServiceHourService {

    /**
     * Retrieve all service hours.
     * 
     * @return List of all ServiceHour objects.
     */
    List<ServiceHour> getAllServiceHours();

    /**
     * Save or update a service hour record.
     * 
     * @param serviceHour The ServiceHour object to be saved or updated.
     * @return The saved or updated ServiceHour object.
     */
    ServiceHour saveServiceHour(ServiceHour serviceHour);

    /**
     * Delete a service hour record by its ID.
     * 
     * @param id The ID of the ServiceHour object to be deleted.
     */
    void deleteServiceHour(Long id);

    /**
     * Retrieves service hours for a specific date.
     * 
     * @param date the date for which to retrieve service hours
     * @return a list of ServiceHour objects for the given date
     */
    List<ServiceHour> getServiceHoursByDate(LocalDate date);

}
