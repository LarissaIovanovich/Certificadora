package com.utfpr.newsapi.service;

import com.utfpr.newsapi.dto.CommentaryDTO;
import com.utfpr.newsapi.entity.Commentary;
import com.utfpr.newsapi.repository.CommentaryRepository;
import com.utfpr.newsapi.repository.ReportRepository;
import com.utfpr.newsapi.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;
import java.util.List;

@Service
public class CommentaryService {

    @Autowired
    private CommentaryRepository commentaryRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ReportRepository reportRepository;

    public List<Commentary> listComentary(Long reportId){
        return commentaryRepository.listComentaryByIdReport(reportId);
    };

    public Commentary addComentary(CommentaryDTO commentaryDTO, Long id, String email){
        return commentaryRepository.save(new Commentary(
                this.userRepository.findByEmail(email),
                commentaryDTO.info(),
                this.reportRepository.findRef(id),
                new Date()
        ));
    }




}
