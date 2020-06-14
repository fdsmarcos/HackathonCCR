import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CadastroComponent } from './Cadastro/cadastro.component';
import { ContatoComponent } from './Contato/contato.component';
import { LoginComponent } from './Login/login.component';
import { HomeComponent } from './Home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'Cadastro', component: CadastroComponent },
  { path: 'Contato', component: ContatoComponent },
  { path: 'Login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
