import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const postsEndpoint = 'http://jsonplaceholder.typicode.com/posts/';
const usersEndpoint = 'https://jsonplaceholder.typicode.com/users';
const commentEndpoint = 'http://jsonplaceholder.typicode.com/comments?postId=';
const commentsEndpoint = 'http://jsonplaceholder.typicode.com/comments';
const editPosts = 'http://jsonplaceholder.typicode.com/posts/';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }
  getPostsService(param):
    Observable<any> {
    return this.http.get(postsEndpoint + param);
  }

  getAllPostsService():
    Observable<any> {
    return this.http.get(postsEndpoint);
  }

  getUsersService():
    Observable<any> {
    return this.http.get(usersEndpoint);
  }

  getCommentService(param):
    Observable<any> {
    return this.http.get(commentEndpoint + param);
  }

  getAllCommentsService():
    Observable<any> {
    return this.http.get(commentsEndpoint);
  }

  editPost(model,param):
  Observable<any> {

    console.log('ovo je parametar', param);
    return this.http.put(editPosts + param,
      {
        "userId":model.userId,
        "id" : model.id,
        "title": model.title,
        "body": model.description
      });
  }
}
