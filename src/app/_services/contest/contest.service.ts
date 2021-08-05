import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//const CONTEST_API_URL = 'http://localhost:8080/veganstudio';
const CONTEST_API_URL = 'http://vegan-studio-frontend:888/veganstudio';
@Injectable({
  providedIn: 'root',
})
export class ContestService {
  constructor(private http: HttpClient) {}

  index(): Observable<any> {
    return this.http.get(CONTEST_API_URL + '/contests');
  }
  remove(id): Observable<any> {
    return this.http.delete(CONTEST_API_URL + `/contests/${id}`);
  }

  store(contest): Observable<any> {
    return this.http.post(CONTEST_API_URL + '/contests', contest);
  }
}
