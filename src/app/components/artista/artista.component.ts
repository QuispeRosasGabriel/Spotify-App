import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.scss']
})
export class ArtistaComponent implements OnInit {
  cargando: boolean
  artista: any = {}

  constructor(private _spotifyService: SpotifyService,
    private activatedRoute: ActivatedRoute) {
    this.cargando = true
    //capturando parametros de la url
    this.activatedRoute.params.subscribe(params => {
      this.getArtista(params['id']);
    })
  }
  ngOnInit() {
  }

  getArtista(id: string) {
    this.cargando = true
    this._spotifyService.getArtist(id).subscribe(data => {
      console.log(data);
      this.artista = data
      this.cargando = false

    })
  }

}
