import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _dataService: DataService, private router: Router) { }

  ngOnInit() {
  }
  onSubmit(f) {
    this._dataService.session_name = f.value.username;
    this.router.navigate(['/all']);
  }
}
