package com.utfpr.newsapi.dto;

import com.utfpr.newsapi.entity.UserRole;
import lombok.*;
public record UserDTO(String email, String name, String password, UserRole role){

}
