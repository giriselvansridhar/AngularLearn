import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Book } from './book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {


  private apiUrl="https://localhost:7082";



  constructor(private Http: HttpClient) {



  



   }
}
