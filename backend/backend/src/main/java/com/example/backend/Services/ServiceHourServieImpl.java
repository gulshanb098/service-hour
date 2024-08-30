package com.example.backend.Services;

import java.time.LocalDate;
import java.time.LocalTime;
import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend.Models.DayType;
import com.example.backend.Models.HourType;
import com.example.backend.Models.ServiceHour;

@Service
public class ServiceHourServieImpl implements ServiceHourService {

        private static final List<ServiceHour> serviceHourList = new ArrayList<>();

        static {
                serviceHourList.add(new ServiceHour(1L, LocalDate.parse("2024-08-26"), DayType.MONDAY,
                                LocalTime.parse("08:00"),
                                LocalTime.parse("19:45"), "Regular hours", HourType.REGULAR));
                serviceHourList.add(new ServiceHour(2L, LocalDate.parse("2024-09-27"), DayType.TUESDAY,
                                LocalTime.parse("08:00"),
                                LocalTime.parse("19:45"), "Regular hours", HourType.REGULAR));
                serviceHourList.add(new ServiceHour(3L, LocalDate.parse("2024-09-28"), DayType.WEDNESDAY,
                                LocalTime.parse("08:00"),
                                LocalTime.parse("19:45"), "Regular hours", HourType.REGULAR));
                serviceHourList.add(new ServiceHour(4L, LocalDate.parse("2024-09-29"), DayType.THURSDAY,
                                LocalTime.parse("08:00"),
                                LocalTime.parse("19:45"), "Regular hours", HourType.REGULAR));
                serviceHourList.add(new ServiceHour(5L, LocalDate.parse("2024-08-31"), DayType.FRIDAY,
                                LocalTime.parse("09:00"),
                                LocalTime.parse("17:45"), "Regular weekend hours", HourType.REGULARCHANGED));
                serviceHourList.add(new ServiceHour(6L, LocalDate.parse("2024-09-01"), DayType.SATURDAY,
                                LocalTime.parse("09:00"),
                                LocalTime.parse("17:45"), "Regular weekend hours", HourType.WEEKEND));
                serviceHourList.add(new ServiceHour(7L, LocalDate.parse("2024-09-02"), DayType.SUNDAY,
                                LocalTime.parse("10:00"),
                                LocalTime.parse("16:00"), "Regular weekend hours", HourType.WEEKEND));
                serviceHourList.add(new ServiceHour(7L, null, null,
                                LocalTime.parse("10:00"),
                                LocalTime.parse("16:00"), "Special hours", HourType.SPECIAL));
        }

        @Override
        public List<ServiceHour> getAllServiceHours() {
                return serviceHourList;
        }

        @Override
        public ServiceHour saveServiceHour(ServiceHour serviceHour) {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'saveServiceHour'");
        }

        @Override
        public void deleteServiceHour(Long id) {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'deleteServiceHour'");
        }

        @Override
        public List<ServiceHour> getServiceHoursByDate(LocalDate date) {
                // TODO Auto-generated method stub
                throw new UnsupportedOperationException("Unimplemented method 'getServiceHoursByDate'");
        }

}
