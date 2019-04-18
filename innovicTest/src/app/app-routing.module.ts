import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostcommentsComponent } from './components/postcomments/postcomments.component';

const routes: Routes = [
  { path: 'postlist', component: PostcommentsComponent },
  { path: 'posts/:id', component: PostViewComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
