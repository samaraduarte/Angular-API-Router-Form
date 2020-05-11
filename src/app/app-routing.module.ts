import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommentComponent } from './comment/comment.component';
import { PostComponent } from './post/post.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  { path: 'user', component: UserComponent },
  { path: 'post', component: PostComponent },
  { path: 'comments', component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
