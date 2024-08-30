package com.example.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend.Models.ServiceHour;
import com.example.backend.Services.ServiceHourService;

@RestController()
@RequestMapping("/api/serviceHours")
@CrossOrigin(origins = "http://localhost:3000")
public class ServiceHourController {

    @Autowired
    private ServiceHourService serviceHourService;

    @GetMapping("/")
    public ResponseEntity<List<ServiceHour>> getAllServiceHours() {
        List<ServiceHour> serviceHourList = serviceHourService.getAllServiceHours();
        return new ResponseEntity<List<ServiceHour>>(serviceHourList, HttpStatus.OK);
    }
}