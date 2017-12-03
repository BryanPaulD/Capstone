import { Component, OnInit } from '@angular/core';
import {CandidatesService} from "../services/candidates.service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-ballot',
  templateUrl: './ballot.component.html',
  styleUrls: ['./ballot.component.css']
})
export class BallotComponent implements OnInit {

  constructor(public cService: CandidatesService, private router: Router) { }

  public candidateSelected: boolean = false;
  public atLeastOneVote: boolean = false;
  public numberOfVotes: number = 0;
  public selectedCandidate: string = "";

  radioClicked(selection)
  {

    this.showConfirmButton();

    this.selectedCandidate = selection;
    // console.log(selection);
  }
  showConfirmButton()
  {
    this.candidateSelected = true;
  }

  addVote()
  {
    this.cService.addVote(this.selectedCandidate);

    this.incrementVoteNumber();
  }
  incrementVoteNumber()
  {
    this.numberOfVotes++;

    if(this.numberOfVotes === 1)
    {
      this.atLeastOneVote = true;
    }
  }

  goToResults()
  {
    this.router.navigateByUrl('/results');
  }
  doneVotingClicked()
  {
    this.cService.sortCandidates();
    this.goToResults();
  }

  ngOnInit() {
  }

}
