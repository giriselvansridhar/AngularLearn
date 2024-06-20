# AngularLearn


1. Node.js
2.   



C:\Users\intern05>npm i @agnular/cli@18.0.1. -g


3. Install VS Code
4. ng serve to run
5. Angular deep dive


Angular.jshon ---> To find the configurations of the project
Public------------> 
Src---------------> 


5.


create a file book.ts  




export interface Book
{

    id: number,
    author: string,
    title: string
    


}



6.  Compoent

1.ng g c book-list
2.regester it to the root component

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BookListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'book-list-application4';
}

7. Binding Data


   1. in the comopoent link the list
   2. bind the data


   book: Book[] =
  [

    {id:1, title: "Book one", author:"Authorone"},
    {id:2, title: "Book two", author:"Author two"},
    {id:3, title: "Book three", author:"Author three"},

    


  ]


8. 

loop in the angular html 

*ngFor="let book of books"


import { CommonModule } from '@angular/common';
imort:[commonModule]



9. Service that fetch the data from ASP.net


ng g service <>


@Injectable({
  providedIn: 'root'
})   //It can be used anyware in the application


10. Service ----> API


services.ts

import HttpClient


app.config.ts

import ProvideHttp Client


providers:
[


    provideHttpClient
]



export class BookService {


  private apiUrl="https://localhost:7082";



  constructor(private Http: HttpClient) {
    
   }
}




11. 


services.ts


imoprt Book
import observable ----> Handles the request













