import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { environment } from "../../environments/environment";
import { Book } from "../models/book";

@Injectable({
  providedIn: 'root'
})
export class BookApiService {
  BASE_URL = environment.API_URL;

  constructor(private http: HttpClient) { }

  getBooks(queryString): Observable<Book[]> {
    const params = new HttpParams().set('q', queryString);
    return this.http
      .get<Book[]>(`${this.BASE_URL}`, {params: params})
      .pipe(map((data) => data['items']));
  }
}
