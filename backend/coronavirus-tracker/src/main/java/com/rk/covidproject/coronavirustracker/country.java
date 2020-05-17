package com.rk.covidproject.coronavirustracker;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;

@JsonIgnoreProperties(ignoreUnknown = true)
public class country {
	protected String Country;
	protected String CountryCode;
	protected String Slug;
	protected long NewConfirmed;
	protected long TotalConfirmed;
	protected long NewDeaths;
	protected long TotalDeaths;
	protected long NewRecovered;
	protected long TotalRecovered;
	protected String Date;

	public country(String country, String countryCode, String slug, long newConfirmed, long totalConfirmed, long newDeaths,
			long totalDeaths, long newRecovered, long totalRecovered, String date) {
		super();
		Country = country;
		CountryCode = countryCode;
		Slug = slug;
		NewConfirmed = newConfirmed;
		TotalConfirmed = totalConfirmed;
		NewDeaths = newDeaths;
		TotalDeaths = totalDeaths;
		NewRecovered = newRecovered;
		TotalRecovered = totalRecovered;
		Date = date;
	}

	public country() {
		super();
		// TODO Auto-generated constructor stub
	}

	public String getCountry() {
		return Country;
	}

	public void setCountry(String country) {
		Country = country;
	}

	public String getCountryCode() {
		return CountryCode;
	}

	public void setCountryCode(String countryCode) {
		CountryCode = countryCode;
	}

	public String getSlug() {
		return Slug;
	}

	public void setSlug(String slug) {
		Slug = slug;
	}

	public long getNewConfirmed() {
		return NewConfirmed;
	}

	public void setNewConfirmed(long newConfirmed) {
		NewConfirmed = newConfirmed;
	}

	public long getTotalConfirmed() {
		return TotalConfirmed;
	}

	public void setTotalConfirmed(long totalConfirmed) {
		TotalConfirmed = totalConfirmed;
	}

	public long getNewDeaths() {
		return NewDeaths;
	}

	public void setNewDeaths(long newDeaths) {
		NewDeaths = newDeaths;
	}

	public long getTotalDeaths() {
		return TotalDeaths;
	}

	public void setTotalDeaths(long totalDeaths) {
		TotalDeaths = totalDeaths;
	}

	public long getNewRecovered() {
		return NewRecovered;
	}

	public void setNewRecovered(long newRecovered) {
		NewRecovered = newRecovered;
	}

	public long getTotalRecovered() {
		return TotalRecovered;
	}

	public void setTotalRecovered(long totalRecovered) {
		TotalRecovered = totalRecovered;
	}

	public String getDate() {
		return Date;
	}

	public void setDate(String date) {
		Date = date;
	}

}
