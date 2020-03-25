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
      "Authorization": "Bearer QCWybGpO-crfeWaaHDEBPkL3sccab4KDrJSQOxQEnMMmeGyh31BvD2VkW1JZpd5IMswA_WVlmzKa2EP5VA"
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

  getTopTracks(id: string) {
    return this.getQuery(`artists/${id}/top-tracks?country=us`)
      .pipe(map(data => data['tracks']))
  }

}
