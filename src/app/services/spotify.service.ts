import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getQuery(query: string) {
    const url = `https://api.spotify.com/v1/${query}`
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQCVtCSZ1lnEVQuVBhz-q6lhJ62ib7wOZXGCZRzez1lp_jPZksgUHXzTVqPAumNkowCoGD1OFGD8-JOiyZw"
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases")
      .pipe(map(data => data['albums'].items))
  }

  getArtist(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items))
  }

}
