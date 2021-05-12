import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ChildActivationEnd } from '@angular/router';
import { Person } from '../models/person';
import { PersonsService } from '../persons.service';

@Component({
  selector: 'app-parent-component',
  templateUrl: './parent-component.component.html',
  styleUrls: ['./parent-component.component.css']
})
export class ParentComponentComponent implements OnInit {

  loadedFeature = "";

  persons : Array<Person>;

  constructor(private personsService : PersonsService) {
   }

  ngOnInit(): void {
    this.getData();
    this.loadedFeature = 'parent';
  }

  getData(){

    this.personsService.getData().subscribe(res =>{
      this.persons = new Array<Person>();
      if(res){
        this.persons = res;
      }else{
        console.log("Please check if your API is up and working !!!!");
      }
    })
  }

  dataToTheChildParent(){
    this.loadedFeature = "parent";
  }

  dataToTheChild(){
    this.loadedFeature = "child";
  }

}
