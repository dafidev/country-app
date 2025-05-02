import { Component, inject, signal } from '@angular/core';
import { SearchInputComponent } from '../../components/search-input/search-input.component';
import { CountryListComponent } from '../../components/country-list/country-list.component';
import { CountryService } from '../../services/country.service';
import { Country } from '../../interfaces/country.interface';

@Component({
  selector: 'app-by-country-page',
  imports: [SearchInputComponent, CountryListComponent],
  templateUrl: './by-country-page.component.html',
})
export class ByCountryPageComponent {
  countryService = inject(CountryService);

  isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  countries = signal<Country[]>([]);

  onSearch(query: string) {
    if (this.isLoading() == true) {
      return;
    }

    this.isLoading.set(true);
    this.errorMessage.set(null);

    this.countryService.searchByCountry(query).subscribe({
      next: (countriesResponse) => {
        this.isLoading.set(false);
        this.countries.set(countriesResponse);
      },
      error: (error) => {
        console.log({ error });
        this.isLoading.set(false);
        this.countries.set([]);
        this.errorMessage.set(error);
      },
    });
  }
}
