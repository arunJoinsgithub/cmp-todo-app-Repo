import { Component, OnInit } from '@angular/core';
import { APIService } from '../API.service';
import { AnalysisOptions } from 'aws-sdk/clients/cloudsearch';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  constructor(private api:APIService) { }

  ngOnInit() {
  }
     

  }



