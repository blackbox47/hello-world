import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthorService {

  getAuthor(){
    return ["Author1","Author2","Author3"];
  }
}
