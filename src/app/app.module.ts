import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserModuleLoaderService } from './browserModuleLoader.service';
import { LeafletComponent } from './leaflet/leaflet.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [
    AppComponent,
    LeafletComponent
  ],
  imports: [
    BrowserModule.withServerTransition({appId: 'my-app'}),
    LeafletModule.forRoot()
  ],
  providers: [BrowserModuleLoaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
