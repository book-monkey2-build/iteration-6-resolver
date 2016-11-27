import { Injectable } from '@angular/core';
import { FormControl, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

import { BookStoreService } from '../../shared/book-store.service';

@Injectable()
export class BookValidatorsService {

  constructor(private bs: BookStoreService){ }

  isbnFormat(control: FormControl): { [error: string]: any } {
    if (!control.value) { return null; }

    let isolatedNumbers = control.value.replace(/[-]/g, '');
    const isbnPattern = /(^\d{10}$)|(^\d{13}$)/g;
    return isbnPattern.test(isolatedNumbers) ? null : {
      isbnFormat: { valid: false }
    };
  }

  atLeastOneAuthor(controlArray: FormArray): { [error: string]: any } {
    let check = controlArray.controls.some(el => {
      return (el.value) ? true : false;
    });
    return check ? null : {
      atLeastOneAuthor: { valid: false }
    };
  }

  isbnExists(control: FormControl): Observable<{ [error: string]: any }> {
    return this.bs.check(control.value)
      .map(exists => (exists === false) ? null : {
          isbnExists: { valid: false }
      });

  }
}
