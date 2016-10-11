import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';
import { HomeComponent }   from './home.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	RouterModule.forRoot([
      { path: 'bio', component: BioComponent },
      { path: 'timeline', component: TimelineComponent },
      { path: '**', component: PageNotFoundComponent }
    ])

   ],
  declarations: [ HomeComponent ],
  bootstrap:    [ HomeComponent ]
})

export class AppModule { }