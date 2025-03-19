import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CharacterStatusEnum } from './character-status.enum';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private readonly API_URL = 'https://rickandmortyapi.com/api';

  constructor(private http: HttpClient) {}

  public getCharacters(name?: string, status?: CharacterStatusEnum | string): Observable<any> {
    let params = [];

    if (name) {
        params.push(`name=${name}`)
    };

    if (status) {
        params.push(`status=${status}`)
    };

    const queryString = params.length ? `?${params.join('&')}` : '';

    return this.http.get<any>(`${this.API_URL}/character${queryString}`);
  }

  public getByPage(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
