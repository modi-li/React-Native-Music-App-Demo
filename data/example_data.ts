import Artist from "@/models/Artist";
import Music from "@/models/Music";

export function getExampleData() {
	const artist1 = new Artist("1", "Artist 1", "#eddaf2");
	const artist2 = new Artist("2", "Artist 2", "#dddaf2");
	const artist3 = new Artist("3", "Artist 3", "#dae8f2");
	const artist4 = new Artist("4", "Artist 4", "#daf2e9");
	const artist5 = new Artist("5", "Artist 5", "#dff2da");

	const music1 = new Music("1", "Music 1", artist1, "#f2dcda", 211);
	const music2 = new Music("2", "Music 2", artist2, "#f2e6da", 204);
	const music3 = new Music("3", "Music 3", artist2, "#dff2da", 221);
	const music4 = new Music("4", "Music 4", artist3, "#daf2e9", 208);
	const music5 = new Music("5", "Music 5", artist4, "#dae8f2", 207);
	const music6 = new Music("6", "Music 6", artist5, "#dddaf2", 198);
	const music7 = new Music("7", "Music 7", artist5, "#eddaf2", 192);

	const exampleData = {
		artists: [artist1, artist2, artist3, artist4, artist5],
		recommendedArtists: [artist1, artist3, artist4, artist5],
		musics: [music1, music2, music3, music4, music5, music6, music7],
		recommendedMusics: [music1, music2, music3, music4, music6, music7],
		userFollowedArtists: [artist1, artist3, artist4, artist5],
		userLikedMusics: [music1, music2, music4, music5, music6, music7],
	};

	return exampleData;
}

export function getExampleDataArtist(id: string) {
	const artists = getExampleData().artists;
	for (var i = 0; i < artists.length; i++) {
		if (artists[i].id == id) {
			return artists[i];
		}
	}
}

export function getExampleDataMusic(id: string) {
	const musics = getExampleData().musics;
	for (var i = 0; i < musics.length; i++) {
		if (musics[i].id == id) {
			return musics[i];
		}
	}
}
