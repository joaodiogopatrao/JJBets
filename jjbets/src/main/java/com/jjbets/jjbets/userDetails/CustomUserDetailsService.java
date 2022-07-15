package com.jjbets.jjbets.userDetails;
 
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.jjbets.jjbets.model.user;
import com.jjbets.jjbets.repository.userrepository;
 
public class CustomUserDetailsService implements UserDetailsService {
 
    @Autowired
    private userrepository userrepository;
     
    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        user user = userrepository.findByUsername(username);
        
        if (user == null) {
        	System.out.println(username);
            throw new UsernameNotFoundException("User not found");
        }
        return new CustomUserDetails(user);
    }
 
}