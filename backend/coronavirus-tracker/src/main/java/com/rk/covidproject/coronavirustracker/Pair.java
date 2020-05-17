package com.rk.covidproject.coronavirustracker;

public class Pair<K, V> {

	private final K countrySummary;
	private final V countryAllData;

	public <K, V> Pair<K, V> createPair(K countrySummary, V countryAllData) {
		return new Pair<K, V>(countrySummary, countryAllData);
	}

	public Pair(K countrySummary, V countryAllData) {
		this.countrySummary = countrySummary;
		this.countryAllData = countryAllData;
	}

	public K getcountrySummary() {
		return countrySummary;
	}

	public V getcountryAllData() {
		return countryAllData;
	}

}
