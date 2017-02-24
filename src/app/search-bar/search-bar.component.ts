import { People } from '../people/people';
import { PeopleService } from '../people/people.service';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {

  @Output() searched = new EventEmitter();

  constructor(private peopleService: PeopleService) { }

  private filterString: Subject<string> = new Subject<string>();

  private searchBoxValue: string;

  private peopleList: Observable<People[]>

  handleFilterChange(value: string) {
    this.filterString.next(value);
  }

  ngOnInit() {
    this.peopleList = this.filterString
      .debounceTime(300)
      .distinctUntilChanged()
      .switchMap(value => this.peopleService
        .searchPeople(value)
      );

    this.peopleList
      .subscribe(value => {
        this.searched.emit(value);
      })
  }

}
