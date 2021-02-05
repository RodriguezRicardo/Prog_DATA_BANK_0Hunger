import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RelazioneComponent } from './relazione/relazione.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CerealComponent } from './cereal/cereal.component';
import { FoodComponent } from './food/food.component';
import { UndernourishmentComponent } from './undernourishment/undernourishment.component';

@NgModule({
  declarations: [
    AppComponent,
    RelazioneComponent,
    CerealComponent,
    FoodComponent,
    UndernourishmentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
