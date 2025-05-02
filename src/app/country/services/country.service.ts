import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { RESTCountry } from '../interfaces/rest-countries.interface';
import { catchError, delay, map, Observable, throwError } from 'rxjs';
import { CountryMapper } from '../mappers/country.mapper';
import type { Country } from '../interfaces/country.interface';

const API_URL = 'https://restcountries.com/v3.1';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  private http = inject(HttpClient);

  searchByCapital(query: string): Observable<Country[]> {
    query = query.toLowerCase();

    return this.http.get<RESTCountry[]>(`${API_URL}/capital/${query}`).pipe(
      map((restCountriesResponse) =>
        CountryMapper.mapRestCountryArrayToCountryArray(restCountriesResponse)
      ),
      catchError((error) => {
        console.log('Error fetching', error);
        return throwError(
          () =>
            new Error(
              `Not abled to found country/ies with that query: ${query}`
            )
        );
      })
    );
  }

  searchByCountry(query: string): Observable<Country[]> {
    query = query.toLocaleLowerCase();
    return this.http.get<RESTCountry[]>(`${API_URL}/name/${query}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryArrayToCountryArray(restCountries)
      ),
      delay(2000),
      catchError((error) => {
        return throwError(
          () =>
            new Error(
              `Not abled to found country/ies with that query: ${query}`
            )
        );
      })
    );
  }

  searchByCountryByAlphaCode(code: string): Observable<Country> {
    return this.http.get<RESTCountry[]>(`${API_URL}/alpha/${code}`).pipe(
      map((restCountries) =>
        CountryMapper.mapRestCountryArrayToCountryArray(restCountries)
      ),
      map((countries) => countries[0]),
      catchError((error) => {
        return throwError(
          () =>
            new Error(`Not abled to found country/ies with that code: ${code}`)
        );
      })
    );
  }
}
