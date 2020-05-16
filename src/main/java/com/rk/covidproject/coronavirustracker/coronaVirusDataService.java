package com.rk.covidproject.coronavirustracker;

import java.io.IOException;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Calendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import com.rk.covidproject.coronavirustracker.Pair;
import javax.annotation.PostConstruct;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.json.JsonParser;
import org.springframework.boot.json.JsonParserFactory;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.RestTemplate;
import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import com.fasterxml.jackson.core.JsonParser.Feature;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;

@Service
public class coronaVirusDataService {

	private static String url = "https://api.covid19api.com/summary";

	private static String byCountryURL = "https://api.covid19api.com/total/country/dffghjdkvj";

	@Autowired
	RestTemplate restTemplate;

	public Map<String, Object> fetchVirusData() throws IOException, InterruptedException {

		try {
			String resp = restTemplate.getForObject(url, String.class);

			JsonParser springParser = JsonParserFactory.getJsonParser();
			Map<String, Object> map = springParser.parseMap(resp);

			return map;
		} catch (HttpClientErrorException e) {
			throw new RuntimeException("it was not possible to retrieve covid data");
		}
	}

	public Pair<Object, ArrayList<Object>> fetchVirusDataByCountry(String Country)
			throws IOException, InterruptedException, ClassNotFoundException, NoSuchFieldException,
			IllegalArgumentException, IllegalAccessException, SecurityException, ParseException {

		try {

			String byCountryURLFinal = byCountryURL.replace("dffghjdkvj", Country);

			String resp = restTemplate.getForObject(byCountryURLFinal, String.class);

			JsonParser springParser = JsonParserFactory.getJsonParser();
			ArrayList<Object> res11 = (ArrayList) springParser.parseList(resp);

			String resp1 = restTemplate.getForObject(url, String.class);
			Map<String, Object> map2 = springParser.parseMap(resp1);

			ObjectMapper ob = new ObjectMapper();
			ob.configure(Feature.ALLOW_UNQUOTED_FIELD_NAMES, true);

			String jsonString = ob.writeValueAsString(map2);

			System.out.println("\njsonString = " + jsonString + "\n");

			JSONParser parse = new JSONParser();
			JSONObject jobj = (JSONObject) parse.parse(jsonString);

			JSONArray countriesSummary = (JSONArray) jobj.get("Countries");

			System.out.println("\njsonString = " + countriesSummary + "\n");

			// country[] countriesSummary = ob.readValue(jsonString, country[].class);

			country countrySummaryRes = new country();

			for (int i = 0; i < countriesSummary.size(); i++) {
				// Store the JSON objects in an array
				// Get the index of the JSON object and print the values as per the index
				JSONObject countrySummary = (JSONObject) countriesSummary.get(i);

				if (countrySummary.get("Slug").equals(Country)) {
					countrySummaryRes.setCountry(countrySummary.get("Country").toString());
					countrySummaryRes.setCountryCode(countrySummary.get("CountryCode").toString());
					countrySummaryRes.setDate(countrySummary.get("Date").toString());
					countrySummaryRes.setNewConfirmed((Long) countrySummary.get("NewConfirmed"));
					countrySummaryRes.setNewDeaths((Long) countrySummary.get("NewDeaths"));
					countrySummaryRes.setNewRecovered((Long) countrySummary.get("NewRecovered"));
					countrySummaryRes.setSlug(countrySummary.get("Slug").toString());
					countrySummaryRes.setTotalConfirmed((Long) countrySummary.get("TotalConfirmed"));
					countrySummaryRes.setTotalDeaths((Long) countrySummary.get("TotalDeaths"));
					countrySummaryRes.setTotalRecovered((Long) countrySummary.get("TotalRecovered"));
					break;
				}
			}

			Pair<Object, ArrayList<Object>> res = new Pair<Object, ArrayList<Object>>(countrySummaryRes, res11);
			return res;

		} catch (HttpClientErrorException e) {
			throw new RuntimeException("it was not possible to retrieve covid data");
		}
	}
}
