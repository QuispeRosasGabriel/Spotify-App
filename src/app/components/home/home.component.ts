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
  loading: boolean
  error: boolean = false;
  mensajeError: string;
  constructor(private _countriesService: CountriesService,
    private _spotifyService: SpotifyService) {
    this.loading = true;
    this._spotifyService.getNewReleases().subscribe((data: any) => {
      this.nuevasCanciones = data;
      this.loading = false;
    }, (err) => {
      this.loading = false;
      this.error = true
      this.mensajeError = err.error.error.message
      // console.log(err.error.error.message);
      // console.log(err.status);
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
