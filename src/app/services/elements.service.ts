import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { Element } from '../models/element.model';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ElementsService {
  constructor(private http: HttpClient) {}

  apiUrl = environment.apiUrl;

  getElement(): Observable<Element> {
    return this.http.get<Element[]>(this.apiUrl).pipe(
      map((response: Element[]) => {
        const pendingElements = response.filter(
          (element: Element) => element.status === 'pending'
        );
        return pendingElements[1];
      })
    );
  }
}
