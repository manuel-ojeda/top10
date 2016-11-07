(function() {
	'use strict';

	var lastfmTracks = {
		templateUrl: "./components/lastfmtracks/lastfmtracks.component.html",
		controller: lastfmTracksCtrl
	}

	lastfmTracksCtrl.$inject = ["apiLastFmTracks"];

	angular.module("top10")
		.component("lastfmTracks", lastfmTracks);

	function lastfmTracksCtrl(apiLastFmTracks) {
		var lft = this;

		lft.tracks = null;
		lft.apiTracksData = apiLastFmTracks.get().$promise.then(function(response) {
			lft.tracks = response.tracks.track;
		});
	}
})();