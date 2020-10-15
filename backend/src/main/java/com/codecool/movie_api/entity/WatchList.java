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
public class WatchList {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, unique = true)
    private String imdbId;

    private String releaseYear;

    private String poster;

    @Transient
    private long age;

    public void calculateAge() {
        if (releaseYear != null) {
            int parsedReleaseYear = Integer.parseInt(releaseYear);
            age = LocalDate.now().getYear() - parsedReleaseYear;
        }
    }


}
