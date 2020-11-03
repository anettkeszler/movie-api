package com.codecool.movie_api.entity;


import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class Movie {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(unique = true)
    private String imdbId;

    private String releaseYear;

    private String poster;

    @Transient
    private long age;

    public LocalDate parseReleaseYearToLocalDate(String releaseYear) {
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("yyyy");
        String date = releaseYear;
        LocalDate localDate = LocalDate.parse(date, formatter);
        return localDate;
    }

    public void calculateAge() {
        LocalDate localDate = parseReleaseYearToLocalDate(releaseYear);
        if (releaseYear != null) {
            age = ChronoUnit.YEARS.between(localDate, LocalDate.now());
        }
    }

    public String getImdbId() {
        return imdbId;
    }




}
