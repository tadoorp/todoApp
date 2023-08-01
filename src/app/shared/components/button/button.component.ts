import { ElementRef, Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import ButtonIconBeforeExample from 'src/app/shared/components/button/button-wrapper';

@Component({
  selector: 'app-button',
  template: `<span [id]="id"><ng-content></ng-content></span>`,
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() config: any = "";
  @Input() id: any = "";
  @Input() disabled: boolean = false;
  @Input() isSelected: boolean = false;
  
  public color:  string = "#296B99";

  private hasViewLoaded = false;


  constructor(
    private elt: ElementRef
  ) {

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
      React.createElement(ButtonIconBeforeExample, {
        ...this.config, 
        label: this.elt.nativeElement.textContent, 
        disabled: this.disabled,
        isSelected: this.isSelected,
        color: this.config.appearance == 'primary' ? this.color : '',
        ...(this.isSelected ? { color: this.color } : '')
      }),
      document.getElementById(this.id)
    );
  }
}
