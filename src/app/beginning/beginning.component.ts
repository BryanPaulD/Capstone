import { Component } from '@angular/core';
import {CandidatesService} from "../services/candidates.service.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-beginning',
  templateUrl: './beginning.component.html',
  styleUrls: ['./beginning.component.css']
})
export class BeginningComponent {

  constructor(public cService: CandidatesService, private router: Router) {}
  
  public candidateName = '';
  public candidates: string[] = [];
  public atLeastThreeCandidates: boolean = false;

  addCandidate()
  {
    if (this.candidateName !== '')
    {
      this.candidates.push(this.candidateName);
      // this.cService.candidates.push(this.candidateName);
      this.cService.addCandidate(this.candidateName);

      console.log(this.candidates);
      // console.log(this.candidates + " = " + this.cService.candidates + "?");
    }

    if (this.candidates.length === 3)
    {
      this.atLeastThreeCandidates = true;
    }

    this.candidateName = '';
  }

  goToBallot()
  {
    this.router.navigateByUrl('/ballot');
  }

}
