package com.inertia;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.domain.EntityScan;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
@EntityScan(basePackages = "com.inertia.*")
public class DeveloperNotesApp {
    public static void main(String args[]){
        SpringApplication.run(DeveloperNotesApp.class, args);
    }
}
