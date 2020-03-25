import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) {
    //capturando parametros de la url
    this.activatedRoute.params.subscribe(params => {
      console.log(params);
    })
  }

  ngOnInit() {
  }


}
