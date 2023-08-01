import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { StorageService } from 'src/app/core/http/storage/storage.service';
import { TodoService } from 'src/app/core/http/todo/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  public submit_button = {
    appearance: "primary",
    isLoading: false
  }
  public cancel_button = {
    appearance: ""
  }

  public form_config: any = {
    taskName: {
      placeholder: "",
      type: "text",
      id: "taskName",
      name: "taskName",
      isDisabled: false
    }
  }

  public taskForm: any;
  public submitted: boolean = false;
  public subscription$ = new Subscription();
  public taskId: string | undefined = undefined;


  constructor(
    private _route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private _router: Router,
    private _todoService: TodoService,
    private _storageService: StorageService
  ) {
    this.taskForm = this.formBuilder.group({
      taskName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.subscription$.add(
      this._route.params.subscribe(params => {
        let { id } = params;
        if (id) {
          this.taskId = id;
        }
      })
    );
  }

  submit() {
    let { taskName } = this.taskForm.value
    let payload = {
      taskName,
      createdTime: Date.now(),
      status: false,
      userName: this._storageService.getLocalStorage('userName')
    }
    this.subscription$.add(
      this._todoService.createTodo(payload).subscribe((response) => {
        console.log(response);
        this._router.navigateByUrl('/todo/myTodos')
      }, (error) => {
        console.log(error);
      })
    )
  }

  validateTaskDetails() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.taskForm.invalid) {
      return;
    }
    this.submit_button.isLoading = true
    this.submit()
  }

  cancel() {
    this._router.navigateByUrl('/todo/myTodos')
  }

  changeEvent(e: any) {
    this.taskForm.patchValue(e)
  }

  // convenience getter for easy access to form fields
  get f() { return this.taskForm.controls; }

}
