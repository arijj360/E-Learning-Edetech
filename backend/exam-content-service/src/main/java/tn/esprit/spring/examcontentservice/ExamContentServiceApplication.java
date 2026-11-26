package tn.esprit.spring.examcontentservice;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.client.discovery.EnableDiscoveryClient;

@SpringBootApplication
@EnableDiscoveryClient
public class ExamContentServiceApplication {

    public static void main(String[] args) {
        SpringApplication.run(ExamContentServiceApplication.class, args);
    }

}
