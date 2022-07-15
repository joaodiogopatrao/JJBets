package com.jjbets.jjbets.userDetails;

import java.util.Collection;
 
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import com.jjbets.jjbets.model.user;

public class CustomUserDetails implements UserDetails {
 
    private  user user;
     
    public CustomUserDetails(user user) {
        this.user = user;
    }
 
    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return null;
    }
 
    @Override
    public String getUsername() {
  
        return user.getUsername();
    }
 
    @Override
    public String getPassword() {
        return user.getPassword();
    }
 
    @Override
    public boolean isAccountNonExpired() {
        return true;
    }
 
    @Override
    public boolean isAccountNonLocked() {
        return true;
    }
 
    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }
 
    @Override
    public boolean isEnabled() {
        return true;
    }
     
    public String getName() {
        return user.getName();
        
    }
  
 
}