import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';

const routes: Routes = [
  { path:"relazione", component: RelazioneComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
