import { Component, ElementRef, Input, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import LoaderWrapper from './loader-wrapper';


@Component({
  selector: 'app-loader',
  template: `<span [id]="id"><ng-content></ng-content></span>`,
  styleUrls: ['./loader.component.scss']
})
export class LoaderComponent implements OnInit {
  private hasViewLoaded = false;
  @Input() id: any = "";


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
      React.createElement(LoaderWrapper, {
        content: this.elt.nativeElement.textContent
      }),
      document.getElementById(this.id)
    );
  }

}
