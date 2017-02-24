import {PeopleService} from '../people/people.service';
import { People } from '../people/people';
import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'people-card',
  templateUrl: './people-card.component.html',
  styleUrls: ['./people-card.component.css']
})
export class PeopleCardComponent implements OnInit {

  @Input('person') person: People;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleService
        .getPersonImageUrl(this.person.name)
        .subscribe(images => {
          //this.person.image_url = images[0].images.original.url
          var stream = Observable.from(images);
          stream.first()
                .subscribe(image => {
                  this.person.image_url = image.images.original.url;
                });
        })
  }
}
