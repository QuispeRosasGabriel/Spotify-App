import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { CountriesService } from './services/countries.service';
import { SpotifyService } from './services/spotify.service';
import { NoimagePipe } from './pipes/noimage.pipe';
import { TarjetasComponent } from './shared/tarjetas/tarjetas.component';
import { LoadingComponent } from './shared/loading/loading.component';
import { ArtistaComponent } from './components/artista/artista.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    NoimagePipe,
    TarjetasComponent,
    LoadingComponent,
    ArtistaComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [CountriesService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
