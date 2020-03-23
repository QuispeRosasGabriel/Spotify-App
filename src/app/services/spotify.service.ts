import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(private http: HttpClient) { }

  getNewReleases() {
    const headers = new HttpHeaders({
      "Authorization": "Bearer BQDNQsekWU5BjrQaRgxZz26amy6sDvSIAkhh9Nq_IPuyGoVvThbhrgLnTNFx2D_UqB6IRLAd6tLpqaaqcOY"
    })

    this.http.get("https://api.spotify.com/v1/browse/new-releases", { headers }).subscribe(data => {
      console.log(data);
    })
  }

}
