package com.utfpr.newsapi.repository;

import com.utfpr.newsapi.entity.Report;
import com.utfpr.newsapi.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ReportRepository extends JpaRepository<Report, Long> {
    @Query("select r from Report r order by r.publicationDate desc ")
    List<Report>latestMews();

    @Query("select r from Report r where r.id =:id")
    Report findRef(@Param("id") Long id);

}
