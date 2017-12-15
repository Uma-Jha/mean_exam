import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Data } from './../data';

@Component({
  selector: 'app-view-poll',
  templateUrl: './view-poll.component.html',
  styleUrls: ['./view-poll.component.css']
})
export class ViewPollComponent implements OnInit {
  pollId: string = '';
  poll: Data;
  constructor(private route: ActivatedRoute, private _dataService: DataService) { }

  ngOnInit() {
    this.pollId = this.route.snapshot.params['id'];
    this._dataService.getPoll(this.pollId).subscribe(res=>this.poll = res, err=>console.log(err), 
    () => {console.log(this.poll.content)})
   
  }
  addVote(poll: Data, option : string) {
  this._dataService.updatePoll(poll, option);
  }
}
