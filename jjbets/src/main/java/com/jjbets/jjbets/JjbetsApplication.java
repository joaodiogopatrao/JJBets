package com.jjbets.jjbets;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
@EnableJpaRepositories(basePackages = "com.jjbets.jjbets.repository")
@SpringBootApplication
public class JjbetsApplication {

public static void main(String[] args) {
	SpringApplication.run(JjbetsApplication.class, args);
	}
}