import { People } from './people';
import { PeopleService } from './people.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
  providers: [
    PeopleService
  ]
})
export class PeopleComponent implements OnInit {

  people: Array<People>;

  constructor(private peopleService: PeopleService) {}

  ngOnInit() {
    this.peopleService
        .getPeople()
        .subscribe(people => {
          this.people = people;
        })
  }

  valueChanged(value) {
    this.people = value;
  }
}