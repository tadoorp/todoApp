import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { StorageService } from 'src/app/core/http/storage/storage.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  public loginForm: any;
  public isLoginDisabled: boolean = false;
  public form_config = {
    userName: {
      placeholder: "Enter username",
      type: "text",
      id: "userName",
      name: "userName",
      required: true,
      autoFocus: true,
      isDisabled: false
    },
    submitted: false
  }
  public warning_button_config = {
    appearance: "primary",
    isFullwidth: true,
    isLoading: false
  }
  public submitted: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private _router: Router,
    private _storageService: StorageService
  ) {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  signin() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }
    let { userName } = this.loginForm.value
    this._storageService.setLocalStorage(userName, 'userName')
    this._router.navigateByUrl('/todo/myTodos')
  }

  changeEvent(e: any) {
    this.loginForm.patchValue(e)
  }

  enterKeyEvent(e: any) {
    this.signin()
  }

  get f() { return this.loginForm.controls; }

}
