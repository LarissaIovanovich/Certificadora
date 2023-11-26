package com.utfpr.newsapi.dto;

import java.util.Date;

public record PublishReportDTO(String title, String subTitle, String body, String email, Date publicationDate) {
}
