import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostViewComponent } from './components/post-view/post-view.component';
import { PostcommentsComponent } from './components/postcomments/postcomments.component';
import {EditPostComponent} from './components/edit-post/edit-post.component';

const routes: Routes = [
  { path: 'postlist', component: PostcommentsComponent },
  { path: 'posts/:id', component: PostViewComponent },
  {path: 'edit-post', component: EditPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{scrollPositionRestoration: 'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
