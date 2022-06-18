import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { PiliComponent } from './pili/pili.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot([
      { path: '', redirectTo: '/inicio', pathMatch: 'full' },
      { path: 'inicio', component: InicioComponent },
      { path: 'larpi', component: PiliComponent },
    ]),
  ],
  declarations: [AppComponent, HelloComponent, InicioComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
