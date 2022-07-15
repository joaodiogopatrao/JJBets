package com.jjbets.jjbets.controller;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;



import java.util.Random;


@RestController
public class PlaysController {
	
  
	
	
	@GetMapping(value = "/play_roleta")
	public double roletaPlay() {
		Random r = new Random();
		int low = 0;
		int high = 36;
        return r.nextInt(high-low) + low;
    }
	@GetMapping(value = "/play_roletacolors")
	public boolean[] roletaColor(@RequestParam double value) {
		boolean[] colors = new boolean[3];
		boolean isRed = false;
		boolean isBlack = false;
		boolean isGreen = false;
		if(value == 1 ||value == 3 || value == 5 ||value == 7 || value == 9 || value == 12 
		|| value == 14 || value == 16 || value == 18||value == 19 ||value == 21 || value== 23 || value == 25 ||
		value == 27 || value == 30 || value == 32 ||value == 34 || value == 36) {
		isRed = true;
		isBlack = false;
		isGreen = false;
		}
		if(value == 2 || value == 4 || value == 6 || value == 8 || value == 10 || value == 11 
		|| value == 13 || value == 15 || value == 17 || value == 20 || value == 22 || value == 24 ||
				value == 26 || value == 28 || value == 29 || value == 31 || value == 33|| value == 35) {
		isRed = false;
		isBlack = true;
		isGreen = false;
		}
		if(value == 0) {
			isRed = false;
			isBlack = false;
			isGreen = true;
		}
		
		colors[0] = isRed;
		colors[1] = isBlack;
		colors[2] = isGreen;
		
		return colors;
    }
	

	@GetMapping(value = "/play_maiormenor")
	public double maiormenorPlay() {
		Random r = new Random();
		int low = 1;
		int high = 10;
        return r.nextInt(high-low) + low;
    }
	@GetMapping(value = "/play_maiormenor2")
	public double maiormenorPlay2() {
		Random r = new Random();
		int low = 0;
		int high = 11;
        return r.nextInt(high-low) + low;
    }
	@GetMapping(value = "/play_maiormenorodds")
	public float[] maiormenorPlayodds(@RequestParam int oddconverter) {
		float[]odds = new float[2];
		float odd1;
		float odd2;
		odd1 = 1/((11- oddconverter) / 11f) ;
		odd2 = 1/(oddconverter/11f); 
		
		 odds[0] = odd1;
		 odds[1] = odd2;
		return odds;
    }
	


}
