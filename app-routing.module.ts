import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrincipalComponent } from './principal/principal.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PainelComponent } from './painel/painel.component';

const routes: Routes = [
   { path: 'principal', component: PrincipalComponent },
   { path: '', component: WelcomeComponent},
   { path: 'painel',component:PainelComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
