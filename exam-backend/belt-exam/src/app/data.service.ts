import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { BehaviorSubject } from 'rxjs';
import { Data } from './data';
import 'rxjs/add/operator/map';

@Injectable()
export class DataService {
  dataObserver = new BehaviorSubject([]);
  constructor(private _http: Http) { }
  session_name : String = '';
  retrieveAll() {
    this._http.get('/poll').subscribe(
      tasks => {this.dataObserver.next(tasks.json()); console.log("*************"), console.log(tasks.json())},
      errorResponse => console.log(errorResponse)
    );
  }

  createTask(task: Data) { 
    this._http.post('/poll', task).subscribe(
      (response) => {
        console.log("Poll created");
        this.retrieveAll()
      },
      errorResponse => console.log(errorResponse)
    );
  }
  deleteTask(poll: Data) {
    this._http.post('/poll/delete', poll).subscribe(
      res=> this.retrieveAll(),
      err => console.log("Error occured "+ err)
    );
  }
  getPoll(id) {
    return this._http.get('/poll/'+id).map((res)=> res.json());
   }
   updatePoll(poll: Data, option: String) {
    return this._http.post('/poll/:option', poll).map((res)=> res.json());
   }

}
