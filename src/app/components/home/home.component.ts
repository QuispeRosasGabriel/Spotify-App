import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';
import { SpotifyService } from 'src/app/services/spotify.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  paises: any = [];
  nuevasCanciones: any = []

  constructor(private _countriesService: CountriesService,
    private _spotifyService: SpotifyService) {
    this._spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data.albums.items;
    })
  }

  ngOnInit() {
    this.obtenerData()
  }

  obtenerData() {
    this._countriesService.getCountries().subscribe(resp => {
      this.paises = resp
    })
  }


}
