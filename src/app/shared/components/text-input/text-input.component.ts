import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import TextFieldReactComponent from './text-input-wrapper';

@Component({
  selector: 'app-text-input',
  template: `<span [id]="id"></span>`,
  styleUrls: ['./text-input.component.scss']
})
export class TextInputComponent implements OnInit {
  @Input() config: any;
  @Output() submitEvent = new EventEmitter<any>();
  @Input() id: any = "";
  @Input() value: any = "";
  @Input() disabled: any = false;
  @Input() placeholder: any = '';
  @Input() name: any = '';
  @Input() elemBeforeInput: any;

  @Output() onEnterEvent = new EventEmitter<any>();

  private hasViewLoaded = false;

  constructor() {

  }
  ngOnInit(): void {
    this.id = this.id || (Math.floor(Math.random() * 999999) + 1).toString();
  }

  public ngOnChanges() {
    this.renderComponent();
  }

  public ngAfterViewInit() {
    this.hasViewLoaded = true;
    this.renderComponent();
  }

  private renderComponent() {
    if (!this.hasViewLoaded) {
      return;
    }
    ReactDOM.render(
      React.createElement(TextFieldReactComponent, { 
        placeholder: this.placeholder,
        name: this.name,
        ...this.config,
        disabled: this.disabled,
        elemBeforeInput: this.elemBeforeInput,
        value: this.value || "",
        onChange: (res: any) => {
          if (res.charCode === 13) {
            this.onEnterEvent.emit(res)
          }
          else 
            this.submitEvent.emit({ [res.currentTarget.name]: res.currentTarget.value})
        } }),
      document.getElementById(this.id)
    );
  }

}

