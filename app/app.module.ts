import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule} from '@angular/router';

import { HomeComponent }   from './home.component';
import { BioComponent }   from './bio.component';
import { TimelineComponent }   from './timeline.component';

@NgModule({
  imports: [ 
  	BrowserModule,
  	RouterModule.forRoot([
      { path: 'bio', component: BioComponent },
      { path: 'timeline', component: TimelineComponent },
      {
        path: '',
        redirectTo: '/bio',
        pathMatch: 'full'
      }
      // { path: '**', component: PageNotFoundComponent }
    ])
       ],
  declarations: [ HomeComponent, BioComponent, TimelineComponent ],
  bootstrap:    [ HomeComponent ]
})

export class AppModule { }