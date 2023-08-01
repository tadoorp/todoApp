import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/shared/services/http/http.service';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(
    private _http: HttpService
  ) { }

  getToDosByUserId(query?: any) {
    const url = `https://84eb333e-89cd-4c6b-ad90-f83d3ba8e87d.mock.pstmn.io/myTodos`
    return this._http.get(url, {});
  }

  createTodo(data: any) {
    // const url = `/myTodos/add`;
    const url = `https://5a0b3a68-678b-4986-95c0-a8bb98deffe0.mock.pstmn.io/myTodos/add`
    return this._http.post(url, data)
  }

  updateTask(data: any) {
    // const url = `/myTodos/update`;
    const url = `https://3e027c6f-1716-4774-bde7-4347892f7562.mock.pstmn.io/myTodos/update`
    return this._http.put(url, data)
  }
}
