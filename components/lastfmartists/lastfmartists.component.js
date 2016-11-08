(function() {
	'use strict';

	var lastfmArtists = {
		templateUrl: "./components/lastfmartists/lastfmartists.component.html",
		controller: lastfmArtistsCtrl
	}

	lastfmArtistsCtrl.$inject = ["apiLastFmArtists"];

	angular.module("top10")
		.component("lastfmArtists", lastfmArtists);

	function lastfmArtistsCtrl(apiLastFmArtists) {
		var lfa = this;

		lfa.artists = null;
		lfa.apiArtistsData = apiLastFmArtists.get().$promise.then(function(response) {
			lfa.artists = response.artists.artist;
			console.log(lfa.artists.artist);
		});
	}
})();