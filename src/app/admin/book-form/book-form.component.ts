import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';

import { Book } from '../../shared/book';
import { BookFormErrorMessages } from './book-form-error-messages';
import { BookStoreService } from '../../shared/book-store.service';
import { BookValidatorsService } from '../shared/book-validators.service';

@Component({
  selector: 'bm-book-form',
  templateUrl: 'book-form.component.html'
})
export class BookFormComponent implements OnInit {
  book: Book = Book.empty();
  errors = {};
  isUpdatingBook: boolean = false;
  myForm: FormGroup;
  authors: FormArray;
  thumbnails: FormArray;

  constructor(
    private fb: FormBuilder,
    private bs: BookStoreService,
    private route: ActivatedRoute,
    private router: Router,
    private bv: BookValidatorsService
  ) { }

  ngOnInit() {
    let isbn = this.route.snapshot.params['isbn'];
    if (isbn) {
      this.isUpdatingBook = true;
      this.book = this.route.snapshot.data['book'];
    }
    this.initBook();
  }

  initBook() {
    this.myForm = this.fb.group({
      title: [this.book.title, Validators.required],
      subtitle: [this.book.subtitle],
      isbn: [this.book.isbn, [
        Validators.required,
        this.bv.isbnFormat
      ], this.isUpdatingBook ? null : this.bv.isbnExists.bind(this)],
      description: [this.book.description],
      authors: this.buildAuthorsArray(),
      thumbnails: this.buildThumbnailsArray(),
      published: this.book.published
    });
    this.myForm.valueChanges.subscribe(() => this.updateErrorMessages());
  }

  buildAuthorsArray(): FormArray {
    this.authors = this.fb.array(this.book.authors, this.bv.atLeastOneAuthor);
    return this.authors;
  }

  buildThumbnailsArray(): FormArray {
    this.thumbnails = this.fb.array(
      this.book.thumbnails.map(
        t => this.fb.group({
          url: this.fb.control(t.url),
          title: this.fb.control(t.title)
        })
      )
    );
    return this.thumbnails;
  }

  addAuthorControl() {
    this.authors.push(this.fb.control(null));
  }

  addThumbnailControl() {
    this.thumbnails.push(this.fb.group({ url: null, title: null }));
  }

  submitForm() {
    // filter empty values
    this.myForm.value.authors = this.myForm.value.authors.filter(el => el);
    this.myForm.value.thumbnails = this.myForm.value.thumbnails.filter(el => el.url);

    if (this.isUpdatingBook) {
      this.bs.update(this.myForm.value).subscribe(res => res);
      this.router.navigate(['../../books', this.myForm.value.isbn], { relativeTo: this.route });
    } else {
      this.bs.create(this.myForm.value).subscribe(res => res);
      this.myForm.reset();
    }
  }

  updateErrorMessages() {
    this.errors = {};
    for (let message of BookFormErrorMessages) {
      let control = this.myForm.get(message.forControl);
      if (control &&
          control.dirty &&
          control.invalid &&
          control.errors[message.forValidator] &&
          !this.errors[message.forControl]) {
        this.errors[message.forControl] = message.text;
      }
    }
  }
}
