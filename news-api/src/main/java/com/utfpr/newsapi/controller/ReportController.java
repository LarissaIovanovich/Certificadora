package com.utfpr.newsapi.controller;

import com.utfpr.newsapi.dto.PublishReportDTO;
import com.utfpr.newsapi.entity.Report;
import com.utfpr.newsapi.infra.security.SecurityFilter;
import com.utfpr.newsapi.infra.security.TokenService;
import com.utfpr.newsapi.service.ReportService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.io.UnsupportedEncodingException;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("news")
public class ReportController {

    @Autowired
    private ReportService reportService;

    @Autowired
    private TokenService tokenService;

    @CrossOrigin
    @GetMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public List<Report> getNews(){
        return reportService.latestNews();
    };

    @CrossOrigin
    @PostMapping
    @ResponseStatus(HttpStatus.ACCEPTED)
    public ResponseEntity addNews(@RequestBody PublishReportDTO report, HttpServletRequest request) throws UnsupportedEncodingException {
        var authHeader = request.getHeader("Authorization").replace("Bearer ", "");
        var user = this.tokenService.validateToken(authHeader);
        this.reportService.addNews(report,user);
        return ResponseEntity.ok().build();
    }
    @CrossOrigin
    @GetMapping("/{id}")
    @ResponseStatus(HttpStatus.OK)
    public Report showNews(@PathVariable("id")Long id){
             return reportService.showNews(id);
    }
}
