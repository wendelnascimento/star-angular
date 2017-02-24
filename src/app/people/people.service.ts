import { Injectable } from '@angular/core';
import { People } from './people';
import { Observable } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class PeopleService {

  constructor(private http: Http) { }

  getPeople(): Observable<People[]> {
    return this.http
               .get("https://swapi.co/api/people")
               .map(this.toJSON)
               .catch(this.handleError);
  }

  getPersonImageUrl(query: string): Observable<any[]> {
    return this.http
               .get(`http://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC`)
               .map(this.toJSON)
               .catch(this.handleError);
  }

  searchPeople(query: string): Observable<any[]> {
    return this.http
               .get(`https://swapi.co/api/people/?search=${query}`)
               .map(this.toJSON)
               .catch(this.handleError);
  }

  private toJSON(res: Response) {
    const json = res.json();
    return json.results || json.data;
  }

  private handleError(error) {
    console.log(error);
    return Observable.throw(error);
  }

}
