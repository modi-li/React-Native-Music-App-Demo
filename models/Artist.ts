import Music from "@/models/Music";

export default class Artist {
	id: string;
	name: string;
	musics: Music[];
	imageBackgroundColor: string;

	constructor(id: string, name: string, imageBackgroundColor: string) {
		this.id = id;
		this.name = name;
		this.musics = [];
		this.imageBackgroundColor = imageBackgroundColor;
	}

	addMusic(music: Music) {
		this.musics.push(music);
	}
}
