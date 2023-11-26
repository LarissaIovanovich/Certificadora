package com.utfpr.newsapi.controller;

import com.utfpr.newsapi.dto.CommentaryDTO;
import com.utfpr.newsapi.entity.Commentary;
import com.utfpr.newsapi.infra.security.TokenService;
import com.utfpr.newsapi.service.CommentaryService;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("commentary")
public class CommentaryController {

    @Autowired
    private TokenService tokenService;

    @Autowired
    private CommentaryService commentaryService;

    @CrossOrigin
    @PostMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity addCommentary(@RequestBody CommentaryDTO commentaryDTO,@PathVariable("id")Long  reportId, HttpServletRequest request){
        var authHeader = request.getHeader("Authorization").replace("Bearer ", "");
        var user = this.tokenService.validateToken(authHeader);
        this.commentaryService.addComentary(commentaryDTO,reportId,user);

        return ResponseEntity.ok().build();
    }

    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Commentary> getCommentary(@PathVariable("id")Long id){return commentaryService.listComentary(id);}

}
