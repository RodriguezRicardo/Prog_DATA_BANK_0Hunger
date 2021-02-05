import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RelazioneComponent } from './relazione/relazione.component';
import { CerealComponent } from './cereal/cereal.component';
import { FoodComponent } from './food/food.component';
import { UndernourishmentComponent } from './undernourishment/undernourishment.component';


const routes: Routes = [
  { path: "relazione", component: RelazioneComponent },
  { path: "cereali", component:  CerealComponent },
  { path: "foodSec", component:  FoodComponent },
  { path: "under", component: UndernourishmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
