package com.utfpr.newsapi.service;

import com.utfpr.newsapi.entity.User;
import com.utfpr.newsapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService  {
    @Autowired
    private  UserRepository userRepository;
    /*
    @Autowired
    private  PasswordEncoder passwordEncoder;

     public User userRegister(User user) {
        // Você pode adicionar lógica de validação ou outros processamentos antes de salvar
        user.setPassword(encryptPass(user.getPassword()));
        return userRepository.save(user);
    }

    public String encryptPass(String password) {
        return passwordEncoder.encode(password);
    }

    public User loginUser(String email, String password) {
        User user = userRepository.findByEmail(email);
        if (user != null && passwordEncoder.matches(password, user.getPassword())) {

            return user;
        }
        return null;
    }
*/



}
