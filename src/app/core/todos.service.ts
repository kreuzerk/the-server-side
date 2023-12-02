import {inject, Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class TodosService {
  private http = inject(HttpClient);

  getTodos(): Observable<any[]> {
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos');
  }
}
