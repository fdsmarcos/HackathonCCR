import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Component, Inject } from '@angular/core';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatRadioModule } from '@angular/material/radio';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { ContatoComponent } from './Contato/contato.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';
import { MapasComponent } from './Mapas/mapas.component';

@NgModule({
  declarations: [
    AppComponent,
    CadastroComponent,
    ContatoComponent,
    LoginComponent,
    HomeComponent,
    MapasComponent
  ],
  imports: [
    BrowserModule,
	  BrowserAnimationsModule,
	  FormsModule,
    AppRoutingModule,
	  MatRadioModule,
	  MatCardModule,
	  MatButtonModule,
    MatMenuModule,
    MatIconModule,
    MatCardModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatInputModule,
    MatTooltipModule,
	  MatDividerModule,
	  MatSidenavModule,
	  MatListModule,
	  MatGridListModule,
    MatToolbarModule,
    MatTableModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
