(function() {
	'use strict';

	angular.module("top10")
		.factory("apiLastFmArtists", apiLastFmArtists)
		.factory("apiLastFmTracks", apiLastFmTracks);

	apiLastFmArtists.$inject= ["$resource"];
	apiLastFmTracks.$inject= ["$resource"];

	function apiLastFmArtists($resource) {
		return $resource("http://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key=b1b144845526ad5b2a64dcf56a83ad9c&format=json&limit=10");
	}

	function apiLastFmTracks($resource) {
		return $resource("http://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key=b1b144845526ad5b2a64dcf56a83ad9c&format=json&limit=10/");
	}
})();