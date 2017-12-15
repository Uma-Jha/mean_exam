import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Data } from './../data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  name : String = '';
  constructor(private _dataService: DataService, private router: Router) { }
  pollList: Data[] = [];
  ngOnInit() {
    this.name = this._dataService.session_name;
    this._dataService.dataObserver.subscribe(
      tasks => this.pollList = tasks
    );
   this._dataService.retrieveAll();
  }
  deletePoll(poll : Data) {
    this._dataService.deleteTask(poll);
  }
  goToPoll(poll: Data) {
    console.log("****************************   "+poll['_id']);
    this.router.navigate(['/poll', poll['_id']]);
  }

}





