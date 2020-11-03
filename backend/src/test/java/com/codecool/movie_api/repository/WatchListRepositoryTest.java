package com.codecool.movie_api.repository;

import com.codecool.movie_api.model.entity.WatchList;
import org.junit.runner.RunWith;
import org.springframework.boot.test.autoconfigure.jdbc.AutoConfigureTestDatabase;
import org.springframework.boot.test.autoconfigure.orm.jpa.DataJpaTest;
import org.springframework.test.context.junit4.SpringRunner;
import static org.assertj.core.api.Assertions.assertThat;


@RunWith(SpringRunner.class)
@DataJpaTest
@AutoConfigureTestDatabase(replace= AutoConfigureTestDatabase.Replace.NONE)

public class WatchListRepositoryTest {
//    @Autowired
//    private WatchListRepository watchListRepository;
//
//    @Autowired
//    private TestEntityManager testEntityManager;
//
//    @Test
//    public void saveOneExampleToDatabase() {
//        WatchList movie = WatchList.builder()
//                .title("Ozark")
//                .imdbId("12345")
//                .releaseYear("2018")
//                .build();
//
//        watchListRepository.save(movie);
//
//        List<WatchList> watchListList = watchListRepository.findAll();
//
//        assertThat(watchListList).hasSize(1);
//    }
//
//    @Test(expected = DataIntegrityViolationException.class)
//    public void saveUniqueFieldTwice() {
//        WatchList movie = WatchList.builder()
//                .title("Ozark")
//                .imdbId("12345")
//                .build();
//
//        watchListRepository.save(movie);
//
//        WatchList movie2 = WatchList.builder()
//                .title("Ozark")
//                .imdbId("12345")
//                .build();
//        watchListRepository.saveAndFlush(movie2);
//    }
//
//    @Test(expected = DataIntegrityViolationException.class)
//    public void movieTitleAndImdbIdShouldBeNotNull() {
//        WatchList movie = WatchList.builder()
//                .releaseYear("2018")
//                .build();
//        watchListRepository.save(movie);
//    }
//
//    @Test
//    public void calculateAgeWorkingGreat() {
//        WatchList movie = WatchList.builder()
//                .title("Ozark")
//                .imdbId("12345")
//                .releaseYear("2018")
//                .build();
//
//        movie.calculateAge();
//        assertThat(movie.getAge()).isGreaterThanOrEqualTo(2);
//    }
//
//    @Test
//    public void transientIsNotSaved() {
//        WatchList movie = WatchList.builder()
//                .title("Ozark")
//                .imdbId("12345")
//                .releaseYear("2018")
//                .build();
//
//        movie.calculateAge();
//        assertThat(movie.getAge()).isGreaterThanOrEqualTo(2);
//
//        watchListRepository.save(movie);
//        testEntityManager.clear();
//
//        List<WatchList> watchLists = watchListRepository.findAll();
//        assertThat(watchLists).allMatch(movie1 -> movie1.getAge() == 0L);

    }







