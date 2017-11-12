import { Injectable } from '@angular/core';

@Injectable()
export class CandidatesService {

  constructor() { }

  public map = new Map<string, number>();
  public candidates: string[] = [];

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

}
