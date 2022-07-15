package com.jjbets.jjbets.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.jjbets.jjbets.model.user;

// This will be AUTO IMPLEMENTED by Spring into a Bean called userRepository
// CRUD refers Create, Read, Update, Delete
@Repository
public interface userrepository extends JpaRepository<user, Long> {
	 @Query("SELECT u FROM user u WHERE u.username = ?1")
	    public user findByUsername(String username);
}