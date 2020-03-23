import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  artistas: any[] = [];
  constructor(private _spotifyService: SpotifyService) { }

  ngOnInit() {
  }

  buscar(termino: string) {
    console.log(termino);
    this._spotifyService.getArtist(termino).subscribe((resp: any) => {
      console.log(resp.artists.items)
      this.artistas = resp.artists.items;
    })
  }

}
