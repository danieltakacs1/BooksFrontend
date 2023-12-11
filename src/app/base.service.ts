import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BaseService {

  constructor() { 
    this.loadBooks
  }

  loadBooks(){
    this.http.get(this.url+body.id,body).subscribe(
      ()=>this.loadBooks()
    )
  }
  
  getBook(){
    this.
  }

  postBook(body:any) {
    this.http.put(this.url+body.id,body).subscribe(
      ()=>this.loadBooks()
    )
  }

  deleteBook(body:any) {
    this.http.delete(this.url+body.id,body).subscribe(
      ()=>this.loadBooks()
    )
  }
}
