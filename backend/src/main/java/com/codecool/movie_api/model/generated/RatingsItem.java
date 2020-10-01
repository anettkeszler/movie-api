package com.codecool.movie_api.model.generated;

import com.fasterxml.jackson.annotation.JsonProperty;

public class RatingsItem{

	@JsonProperty("Value")
	private String value;

	@JsonProperty("Source")
	private String source;

	public void setValue(String value){
		this.value = value;
	}

	public String getValue(){
		return value;
	}

	public void setSource(String source){
		this.source = source;
	}

	public String getSource(){
		return source;
	}

	@Override
 	public String toString(){
		return 
			"RatingsItem{" + 
			"value = '" + value + '\'' + 
			",source = '" + source + '\'' + 
			"}";
		}
}