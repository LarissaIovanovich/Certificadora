package com.utfpr.newsapi.service;

import com.utfpr.newsapi.dto.PublishReportDTO;
import com.utfpr.newsapi.entity.Report;
import com.utfpr.newsapi.infra.security.TokenService;
import com.utfpr.newsapi.repository.ReportRepository;
import com.utfpr.newsapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.io.UnsupportedEncodingException;
import java.util.Date;
import java.util.List;

@Service
public class ReportService {
    @Autowired
    private ReportRepository reportRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private TokenService tokenService;

    public List<Report> latestNews(){
        return reportRepository.latestMews();
    }

    public Report addNews(PublishReportDTO reportDTO,String email) {
        Report report = new Report(
                new Date(),
                reportDTO.title(),
                reportDTO.subTitle(),
                reportDTO.body(),
                this.userRepository.findByEmail(email)
        );
        return reportRepository.save(report);
    }

    public Report edit(Report report){
        return reportRepository.save(report);
    }

    public Report showNews(Long id){
        return reportRepository.findRef(id);
    }

}
