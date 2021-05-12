import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Person } from 'src/app/models/person';

@Component({
  selector: 'app-child-component',
  template: `<div class="container"><hr> <h2>Child Component</h2> <hr> <div *ngFor="let person of persons"><p>We have a personal details with id : {{person.id}}, full names : {{person.firstName}} {{person.lastName}} with age: {{person.age}}</p>
  <hr></div> <div><button class="btn btn-primary" (click)="dataToTheParent()">Go to Parent</button> </div><hr> 
  </div>
  `,
  styleUrls: ['./child-component.component.css']
})
export class ChildComponentComponent implements OnInit  {

  @Input() persons = new Array<Person>();
  @Output() childData = new EventEmitter<any>();


  ngOnInit() {
    console.log (this.persons.length);
  }

  dataToTheParent(){
    this.childData.emit();
  }

}
