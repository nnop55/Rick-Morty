import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RickAlternativeComponent } from './rickandmorty/rick-alternative/rick-alternative.component';
import { RickandmortyComponent } from './rickandmorty/rickandmorty.component';

const routes: Routes = [
  { path: '', component: RickandmortyComponent },
  { path: 'character/:name', component: RickAlternativeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
