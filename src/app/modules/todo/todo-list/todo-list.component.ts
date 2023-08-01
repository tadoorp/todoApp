import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoService } from 'src/app/core/http/todo/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit {
  public todos: any;
  public add_new_button = {
    appearance: "primary",
    iconName: 'AddIcon'
  }

  constructor(
    private _todoService: TodoService,
    private _router: Router
  ) { }

  ngOnInit(): void {
    this.getToDosByUserId()
  }

  getToDosByUserId() {
    this._todoService.getToDosByUserId().subscribe(({response}) => {
      console.log("get response",response);
      this.todos = response
      // this.todos = []
    }, (error) => {
      console.log(error);
      
    })
  }

  selectOption(e: any) {
    console.log(e);
    let { taskName, userName, status} = e.value
    let payload = {
      taskName,
      updatedTime: Date.now(),
      status: status ? false : true,
      userName: userName
    }
    this._todoService.updateTask(payload).subscribe((response) => {
      console.log(response);
      
    }, (error) => {
      console.log(error);
    })
  }

  cancel() {
    this._router.navigateByUrl('/todo')
  }

}
