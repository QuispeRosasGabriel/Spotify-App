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
      "Authorization": "Bearer BQD4kp2TpcgShlVKogx0NaE3gDCHQFLxqf75P1gjMvSBBXestToic_tuQsYxrnJgX2WmS0U3eNodQO0MOWE"
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
