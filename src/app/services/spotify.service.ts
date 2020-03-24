import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from "rxjs/operators"
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  url: string = "https://api.spotify.com/v1/browse/new-releases"
  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQCVtCSZ1lnEVQuVBhz-q6lhJ62ib7wOZXGCZRzez1lp_jPZksgUHXzTVqPAumNkowCoGD1OFGD8-JOiyZw"
    })

    return this.http.get(this.url, { headers }).pipe(
      //filtando la data para que cuando me suscriba a la respuesta en
      // el componente que lo usa, la obtenga filtrada
      map((data: any) => {
        return data.albums.items
      }))
  }

  getArtist(termino: string) {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQCVtCSZ1lnEVQuVBhz-q6lhJ62ib7wOZXGCZRzez1lp_jPZksgUHXzTVqPAumNkowCoGD1OFGD8-JOiyZw"
    })
    return this.http.get(`https://api.spotify.com/v1/search?q=${termino}&type=artist`, { headers }).pipe(
      map(data => {
        return data['artists'].items
      })
    )
  }

}
