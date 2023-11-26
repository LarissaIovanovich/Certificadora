package com.utfpr.newsapi.controller;

import com.utfpr.newsapi.entity.User;
import com.utfpr.newsapi.service.UserService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("users")
public class UserController {

    @Autowired
    private UserService userService;

    @Autowired
    private HttpServletRequest request;
    /*
    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public User register(@RequestBody User user)
    {return userService.userRegister(user);}

    @PostMapping("/login")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public User login(@RequestBody Map<String, String> loginRequest) {
        HttpSession session = request.getSession();
        // Adiciona o email à sessão

        String email = loginRequest.get("email");
        String password = loginRequest.get("password");
        User loggedInUser = userService.loginUser(email,password);
        session.setAttribute("loggedInUserId", loggedInUser.getId());
        return loggedInUser;
    }*/
}
