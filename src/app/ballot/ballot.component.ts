import { Component, OnInit } from '@angular/core';
import {CandidatesService} from "../services/candidates.service.service";

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  constructor(public cService: CandidatesService) { }

  ngOnInit() {
  }

}
