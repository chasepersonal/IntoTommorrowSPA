import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class BlogService {

  /* Set base url based on environment variable */
  baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getPagebyTitle(title: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `pages/${title}`);
  }

  getPosts(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'posts');
  }

  getAlbum(): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + 'album');
  }

  getAlbumBySlug(slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `album/${slug}`);
  }

  getPostsBySlug(slug: string): Observable<any[]> {
    return this.http.get<any[]>(this.baseUrl + `posts/${slug}`);
  }
}
