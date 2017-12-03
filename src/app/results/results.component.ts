import { Component, OnInit } from '@angular/core';
import {CandidatesService} from "../services/candidates.service.service";

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {

  constructor(public cService: CandidatesService) { }

  ngOnInit() {
  }

}
