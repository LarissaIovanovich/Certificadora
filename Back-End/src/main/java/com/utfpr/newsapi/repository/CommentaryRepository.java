package com.utfpr.newsapi.repository;

import com.utfpr.newsapi.entity.Commentary;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
@Repository
public interface CommentaryRepository extends JpaRepository<Commentary, Long> {
    @Query("select c from Commentary c where c.report.id = :id")
    List<Commentary> listComentaryByIdReport(@Param("id") Long id);
}
