package com.jjbets.jjbets.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

//import org.springframework.security.crypto.password.PasswordEncoder;

@Entity // This tells Hibernate to make a table out of this class
@Table(name = "user")
public class user {
  @Id
  @GeneratedValue
  @Column(name ="user_id")
  private Integer user_id;
  @Column(name ="username")
  private String username;
  @Column(name ="password")
  private String password;
  @Column(name ="name")
  private String name;
  @Column(name ="email")
  private String email;
  @Column(name ="age")
  private int age;
 

  public Integer getId() {
    return user_id;
  }

  public void setId(Integer user_id) {
    this.user_id = user_id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public  String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
    
  }
  public String getName() {
	 return name;
  }
  public void setName(String name) {
	    this.name = name;
  }
  public String getEmail() {
		 return email;
  }
  public void setEmail(String email) {
	    this.email = email;
}
  public int getAge() {
		 return age;
}
public void setAge(int age) {
	    this.age = age;
}
  
}
