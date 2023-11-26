package com.utfpr.newsapi.repository;

import com.utfpr.newsapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Repository;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    @Query("select u from User u where u.email =:email")
    User findByEmail(@Param("email") String email);

    @Query("select u from User u where u.id =:id")
    User findRef(@Param("id") Long id);

    @Query("select u from User u where u.email =:email")
    UserDetails findByLogin(String email);



}
