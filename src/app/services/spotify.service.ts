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
      "Authorization": "Bearer BQATmiugmjYCdC8ijJiEiC3PNkZxczEuLnnVDhBVdr2NYSjZ2zAwNlCtvO94Ath08uyrtlqdAsdppQkI_lQ"
    })
    return this.http.get(url, { headers })
  }

  getNewReleases() {
    return this.getQuery("browse/new-releases")
      .pipe(map(data => data['albums'].items))
  }

  getArtists(termino: string) {
    return this.getQuery(`search?q=${termino}&type=artist`)
      .pipe(map(data => data['artists'].items))
  }

  getArtist(id: string) {
    return this.getQuery(`artists/${id}`)
    // .pipe(map(data => data['artists'].items))
  }

}
