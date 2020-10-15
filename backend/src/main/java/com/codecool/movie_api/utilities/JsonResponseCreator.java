package com.codecool.movie_api.utilities;

import com.codecool.movie_api.model.generated.Movie;
import org.json.JSONArray;
import org.json.JSONObject;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Service;

import javax.persistence.EntityManager;
import javax.websocket.Session;
import java.io.FileWriter;
import java.io.IOException;
import java.sql.*;
import java.util.List;
import java.util.Map;

@Service
public class JsonResponseCreator {
//    public ResultSet RetrieveData() throws SQLException {
//        String psqlUrl = "jdbc:postgresql://localhost:5432/movie-api";
//        Connection conn = DriverManager.getConnection(psqlUrl);
//        PreparedStatement preparedStatement = conn.prepareStatement("SELECT imdb_id, title, poster, release_year FROM watch_list");
//        ResultSet rs = preparedStatement.executeQuery();
//        return rs;
//    }
//
//    public JSONObject createJsonObjectFromDataBase() throws SQLException {
//        JSONObject jsonObject = new JSONObject();
//        // Create a JSON array to hold the records of the Watch_list table, by instantiating the JSONArray class.
//        ResultSet resultSet = RetrieveData();
//        JSONArray array = new JSONArray();
//
//        //Inserting ResultSet data into the json object
//        while(resultSet.next()) {
//
//            JSONObject record = new JSONObject();
//            //Inserting key-value pairs into the json object
//            record.put("imdb_id", resultSet.getString("imdb_id"));
//            record.put("title", resultSet.getString("title"));
//            record.put("poster", resultSet.getString("poster"));
//            record.put("release_year", resultSet.getString("release_year"));
//            array.put(record);
//        }
//        jsonObject.put("Watch_list", array);
//        System.out.println(jsonObject);
//        return jsonObject;

//    }


    }



