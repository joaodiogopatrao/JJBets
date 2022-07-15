package com.jjbets.jjbets.resources;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.jjbets.jjbets.model.user;
import com.jjbets.jjbets.repository.userrepository;
import com.jjbets.jjbets.userDetails.CustomUserDetails;
@Controller
@RequestMapping(value = "/user")


public class userResource{
	
	private CustomUserDetails customuserdetails;
	@Autowired
	userrepository userrepository;
	
	@GetMapping(path="/all")
	  public @ResponseBody Iterable<user> getAllUsers() {
	    // This returns a JSON or XML with the users
	    return userrepository.findAll();
	  }
	  @PostMapping(value="/add")
	  public String processRegister(user user) {
		    BCryptPasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
		    String encodedPassword = passwordEncoder.encode(user.getPassword());
		    user.setPassword(encodedPassword);
		    userrepository.save(user);
		     
		    return "redirect:/login";
		}
	
}
