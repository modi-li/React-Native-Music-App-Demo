import Artist from "@/models/Artist";

export default class Music {
	id: string;
	name: string;
	artist: Artist;
	imageBackgroundColor: string;
	duration: number;

	constructor(
		id: string,
		name: string,
		artist: Artist,
		imageBackgroundColor: string,
		duration: number
	) {
		this.id = id;
		this.name = name;
		this.artist = artist;
		artist.addMusic(this);
		this.imageBackgroundColor = imageBackgroundColor;
		this.duration = duration;
	}
}
