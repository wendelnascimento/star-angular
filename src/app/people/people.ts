export class People {
    private _name: string;

    private _height: string;

    private _mass: string;

    private _hair_color: string;

    private _skin_color: string;

    private _eye_color: string;

    private _birth_year: string;

    private _gender: string;
    
    private _homeworld: string;

    private _films: Array<string>;

    private _species: Array<string>;

    private _vechiles: Array<string>;

    private _starships: Array<string>;

    private _url: string;

    private _image_url: string;

	public get name(): string {
		return this._name;
	}

	public set name(value: string) {
		this._name = value;
	}

	public set height(value: string) {
		this._height = value;
	}

	public set mass(value: string) {
		this._mass = value;
	}

	public set hair_color(value: string) {
		this._hair_color = value;
	}

	public set skin_color(value: string) {
		this._skin_color = value;
	}

	public set eye_color(value: string) {
		this._eye_color = value;
	}

	public set birth_year(value: string) {
		this._birth_year = value;
	}

	public set gender(value: string) {
		this._gender = value;
	}

	public set homeworld(value: string) {
		this._homeworld = value;
	}

	public set films(value: Array<string>) {
		this._films = value;
	}

	public set species(value: Array<string>) {
		this._species = value;
	}

	public set vechiles(value: Array<string>) {
		this._vechiles = value;
	}

	public set starships(value: Array<string>) {
		this._starships = value;
	}

	public set url(value: string) {
		this._url = value;
	}
	
	public set image_url(value: string) {
		this._image_url = value;
	}
	
	constructor($name: string, $height: string, $mass: string, $hair_color: string, $skin_color: string, $eye_color: string, $birth_year: string, $gender: string, $homeworld: string, $films: Array<string>, $species: Array<string>, $vechiles: Array<string>, $starships: Array<string>, $url: string) {
		this.name = $name;
		this.height = $height;
		this.mass = $mass;
		this.hair_color = $hair_color;
		this.skin_color = $skin_color;
		this.eye_color = $eye_color;
		this.birth_year = $birth_year;
		this.gender = $gender;
		this.homeworld = $homeworld;
		this.films = $films;
		this.species = $species;
		this.vechiles = $vechiles;
		this.starships = $starships;
		this.url = $url;
	}
	
}
