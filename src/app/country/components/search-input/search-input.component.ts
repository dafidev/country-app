import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './search-input.component.html',
})
export class SearchInputComponent {
  value = output<string>();
  placeholder = input('Search');

  OnSearch(value: string) {
    if (value.length > 1) {
      this.value.emit(value);
      console.log({ value });
    }
  }
}
