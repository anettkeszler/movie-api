package com.codecool.movie_api.model.entity;

import com.codecool.movie_api.model.user.User;
import lombok.*;

import javax.persistence.*;
import java.util.List;

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
    private String name;

    @Singular("movie")
    @ElementCollection
    private List<String> movies;

    @ManyToOne
    private User user;
}


