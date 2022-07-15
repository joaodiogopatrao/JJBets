
  package com.jjbets.jjbets.webSecurity;
  
  import javax.sql.DataSource;
  
  import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.jdbc.DataSourceBuilder;
import
  org.springframework.context.annotation.Bean; import
  org.springframework.context.annotation.Configuration; import
  org.springframework.security.authentication.dao.DaoAuthenticationProvider;
  import
  org.springframework.security.config.annotation.authentication.builders.
  AuthenticationManagerBuilder; import
  org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.builders.WebSecurity;
import org.springframework.security.config.annotation.web.configuration.
  EnableWebSecurity; import
  org.springframework.security.config.annotation.web.configuration.
  WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService; 
  import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder; 
  import org.springframework.security.crypto.factory.PasswordEncoderFactories; 
  import org.springframework.security.crypto.password.PasswordEncoder;
  
  import com.jjbets.jjbets.userDetails.CustomUserDetailsService;
  
  @Configuration
  @EnableWebSecurity 

  public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
  
	  @Autowired 
	  private DataSource dataSource;
	  
	  @Bean 
	  public UserDetailsService userDetailsService() { 
		  return new CustomUserDetailsService(); 
	  }
	  
	  
	  @Bean
	    public BCryptPasswordEncoder passwordEncoder() {
	        return new BCryptPasswordEncoder();
	    }
	     
	    @Bean
	    public DaoAuthenticationProvider authenticationProvider() {
	        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
	        authProvider.setUserDetailsService(userDetailsService());
	        authProvider.setPasswordEncoder(passwordEncoder());
	         
	        return authProvider;
	    }
	 
	    @Override
	    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
	        auth.authenticationProvider(authenticationProvider());
	    }
	    
	    @Override
	    public void configure(WebSecurity web) throws Exception {
	      web
	        .ignoring()
	           .antMatchers("/user/**"); // #3
	    }
	    
	 @Override 
	 protected void configure(HttpSecurity http) throws Exception {
		
		 http
		 .authorizeRequests()
		  .antMatchers("/user/add").permitAll()
		  .antMatchers("/home").authenticated().anyRequest().permitAll()
		 	.and().formLogin().loginPage("/login").usernameParameter("username").defaultSuccessUrl("/home").permitAll()
		 	.and().logout().logoutSuccessUrl("/").permitAll();
		 	
		 	

	 } 
} 
 