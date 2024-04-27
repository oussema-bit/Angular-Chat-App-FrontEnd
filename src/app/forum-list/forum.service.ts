import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Forum } from '../models/forum';
import {catchError, Observable, retry, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ForumService {

  constructor(private http: HttpClient) { }
  getForums(): Observable<Forum[]>{
    return this.http.get<Forum[]>('http://localhost:8083/api/forums/getAllForums')

  }
}
