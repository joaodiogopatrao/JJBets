package com.jjbets.jjbets.controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.GetMapping;
import com.jjbets.jjbets.model.user;
import java.util.Random;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
@Controller
public class MainController {
	
	private user user;
	
	@GetMapping( value = "/home")
	public String index2(Model model){
	    model.addAttribute("title", "JJBets");
	   // model.addAttribute("userName", user.getName());
	    
	    return "index2";
	}
	
	@GetMapping(value = "/login")
	public String indexlogin() {
		
		return "login";
	}
	@GetMapping(value = "/registo")
	public String indexregisto() {
		return "registo";
	}

}
