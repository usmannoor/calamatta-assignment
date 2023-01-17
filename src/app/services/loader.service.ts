import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()

// remove root when core module issue resolved
export class LoaderService {

  loader: BehaviorSubject<boolean>;

  constructor() {
    this.loader = new BehaviorSubject(false);
  }

  toggleLoader(value: boolean): void {
    this.loader.next(value);
  }
}
