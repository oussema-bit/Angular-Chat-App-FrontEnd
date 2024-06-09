import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Video} from "../../models/video.model";


@Injectable({
  providedIn: 'root'
})
export class VideoService {
  private baseUrl = 'http://localhost:8083/video'; // Adjust the URL as per your configuration

  constructor(private http: HttpClient) { }

  addVideo(videoData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/add`, videoData);
  }

  findAllVideos(): Observable<Video[]> {
    return this.http.get<Video[]>(`${this.baseUrl}/getAll`);
  }

  getVideoById(id: number): Observable<Video> {
    return this.http.get<Video>(`${this.baseUrl}/${id}`);
  }

  findVideosByNiveau(niveau: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byNiveau/${niveau}`);
  }

  findVideosByVisibility(visibility: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byVisibility/${visibility}`);
  }

  findVideosByOption(option: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/byOption/${option}`);
  }

  findVideosByTags(tags: string[]): Observable<any> {
    return this.http.post(`${this.baseUrl}/byTags`, tags);
  }
}
