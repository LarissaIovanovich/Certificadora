package com.utfpr.newsapi.entity;

import jakarta.persistence.*;
import lombok.*;

import java.io.Serializable;
import java.util.Date;

@Entity
@Data
@Getter
@Setter
@Table(name = "reports")

public class Report implements Serializable {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date publicationDate;

    private String title;

    private String subTitle;

    private String body;

    @ManyToOne
    @JoinColumn(name = "author", nullable = false)
    private User user;

    public Report(Date publicationDate, String title, String subTitle, String body, User user){
        this.publicationDate = publicationDate;
        this.title = title;
        this.subTitle = subTitle;
        this.body = body;
        this.user = user;
    }

    public Report(){}


}
