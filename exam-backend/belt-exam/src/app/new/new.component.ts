import { Router } from '@angular/router';
import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Data} from './../data';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  name: String = '';
  data: Data;
  constructor(private _dataService: DataService, private router: Router) { }
  pollList: Data[] = [];
  ngOnInit() {
    this.name = this._dataService.session_name;
    this._dataService.dataObserver.subscribe(
      tasks => this.pollList = tasks
    );
    this._dataService.retrieveAll();
  }
  createPoll(f) {
    this.data = new Data(this.name, f.value.qstn, f.value.option1, f.value.option2, 
    f.value.option3, f.value.option4, 0, 0, 0, 0);
    this._dataService.createTask(this.data);
    f.reset();
    this.data = new Data();
    this.router.navigate(['/all']);
  }
}


