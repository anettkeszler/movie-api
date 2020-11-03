package com.codecool.movie_api.model.user;

import lombok.*;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import com.codecool.movie_api.model.entity.*;


@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue
    Long id;

    @Column(nullable = false, unique = true)
    private String username;

    @Column(nullable = false)
    private String password;

    @Column
    private String fullName;

    @Singular("watchlist")
    @OneToMany(mappedBy = "user")
    private List<WatchList> watchLists;

    @ElementCollection(fetch = FetchType.EAGER)
    @Builder.Default
    private List<String> roles = new ArrayList<>();
}
