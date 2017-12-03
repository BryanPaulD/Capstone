import { Injectable } from '@angular/core';

@Injectable()
export class CandidatesService {

  constructor() {}

  public map = new Map<string, number>();
  public candidates: string[] = [];
  public sortedNames: string[] = [];
  public sortedNumbers: number[] = [];

  addCandidate(s: string) {
    if (this.map[s] != null) {
      console.log("addCandidate: candidate was already added: " + s);
    }
    else {
      this.candidates.push(s);
      this.map[s] = 0;
      console.log("addCandidate: added new candidate: " + s);
    }
  }

  addVote(s: string)
  {
    if (this.map[s] === null)
    {
      console.log("addCandidate: candidate was already added: " + s);
    }
    else
    {
      this.map[s] = this.map[s] + 1;
      console.log(s + ": " + this.map[s]);
    }
  }

  sortCandidates()
  {
    const originalCandidatesLength = this.candidates.length;

    for(let h = 0; h < originalCandidatesLength; h++)
    {
      for(let i = 0, j = 1; j < this.candidates.length;)
      {
        if(this.map[this.candidates[i]] >= this.map[this.candidates[j]])
        {
          if(j === this.candidates.length - 1)
          {
            this.sortedNames.push(this.candidates[i]);
            this.sortedNumbers.push(this.map[this.candidates[i]]);
            this.candidates.splice(i, 1);
          }

          j++;
        }
        else
        {
          if(j === this.candidates.length - 1)
          {
            this.sortedNames.push(this.candidates[j]);
            this.sortedNumbers.push(this.map[this.candidates[j]]);
            this.candidates.splice(j, 1);
          }

          i = j;
          j++;
        }
      }

    }
    this.sortedNames.push(this.candidates[0]);
    this.sortedNumbers.push(this.map[this.candidates[0]]);
    this.candidates.splice(0, 1);
  }

}
