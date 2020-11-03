package com.codecool.movie_api.model.entity;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
public class MovieDetail {
    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private String title;

    @Column(nullable=false, unique = true)
    private String imdbId;

    private LocalDate releaseDate;

    private String poster;

    private String runtime;

    @Singular("genre")
    @ElementCollection
    private List<String> genres;

    private String rating;

    private String director;

    @Singular("actor")
    @ElementCollection
    private List<String> actors;

    private String award;

    private String plot;

}
