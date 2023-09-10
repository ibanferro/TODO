import { Component, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.scss']
})
export class SearchboxComponent implements OnInit {

  formGroup: FormGroup;
  @Output() searchTextEE: EventEmitter<string> = new EventEmitter<string>();
  searchText: string = '';

  constructor() {
    this.formGroup = new FormGroup({
      text: new FormControl( '', [Validators.required] )
    });
  }

  ngOnInit(): void {
  }

  onFormularySubmit()
  {
    this.searchText = this.formGroup.value.text;
    if( this.formGroup.invalid ) return;

    this.searchTextEE.emit(this.searchText);
    this.formGroup.reset();
  }

}
