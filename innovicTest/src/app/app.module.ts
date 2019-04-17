import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PostlistComponent } from './components/postlist/postlist.component';
import { LatestcommentsComponent } from './components/latestcomments/latestcomments.component';
import { AddUserComponent } from './components/add-user/add-user.component';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostcommentsComponent } from './components/postcomments/postcomments.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PostlistComponent,
    LatestcommentsComponent,
    AddUserComponent,
    PostViewComponent,
    PostcommentsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
         path: 'postcomments-cmp',
         component: PostcommentsComponent
      }
   ]),
   RouterModule.forRoot([
    {
       path: 'postview-cmp/:id',
       component: PostViewComponent
    }
 ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
