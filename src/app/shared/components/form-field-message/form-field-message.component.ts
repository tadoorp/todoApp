import { Component, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import FormFieldMessageReactComponent from 'src/app/shared/components/form-field-message/form-field-message-wrapper';

@Component({
  selector: 'app-form-field-message',
  template: `<span [id]="id"><ng-content></ng-content></span>`,
  styleUrls: ['./form-field-message.component.scss']
})
export class FormFieldMessageComponent implements OnInit {
  @Input() type: string = "";

  public id = (Math.floor(Math.random() * 999999) + 1).toString();

  private hasViewLoaded = false;

  constructor(
    private elt: ElementRef, private renderer: Renderer2
  ) {

  }
  ngOnInit(): void {
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
      React.createElement(FormFieldMessageReactComponent, { type: this.type,  children: this.elt.nativeElement.textContent}),
      document.getElementById(this.id)
    );
  }

}