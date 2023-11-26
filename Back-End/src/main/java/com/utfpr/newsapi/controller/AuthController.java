package com.utfpr.newsapi.controller;

import com.utfpr.newsapi.dto.AuthDTO;
import com.utfpr.newsapi.dto.LoginResponseDTO;
import com.utfpr.newsapi.dto.UserDTO;
import com.utfpr.newsapi.entity.User;
import com.utfpr.newsapi.infra.security.TokenService;
import com.utfpr.newsapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("auth")
public class AuthController {
    @Autowired
    private AuthenticationManager authenticationManager;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;


    @CrossOrigin
    @PostMapping("/login")
    public ResponseEntity login(@RequestBody @Validated AuthDTO data){
        var usernamePassword = new UsernamePasswordAuthenticationToken(data.email(), data.password());
        var auth = this.authenticationManager.authenticate(usernamePassword);

        var token = tokenService.generateToken((User) auth.getPrincipal());
        return ResponseEntity.ok(new LoginResponseDTO(token));
    }

    @CrossOrigin
    @PostMapping("/register")
    public ResponseEntity register(@RequestBody @Validated UserDTO data){
        if(this.userRepository.findByLogin(data.email()) != null) return ResponseEntity.badRequest().build();
        String encryptPass = new BCryptPasswordEncoder().encode(data.password());
        User newUser = new User(data.email(), data.name(), encryptPass, data.role());

        this.userRepository.save(newUser);

        return ResponseEntity.ok(true);
    }
}
