import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoFormComponent } from './todo-form/todo-form.component';

const routes: Routes = [
  { 
    path: '', 
    component: TodoComponent,
  },
  {
    path: 'myTodos',
    component: TodoListComponent,
  },
  {
    path: 'myTodos/new',
    component: TodoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
