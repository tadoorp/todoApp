import { Component, ElementRef, Input, OnInit } from '@angular/core';
import React from 'react';
import ReactDOM from 'react-dom';
import LozengeWrapper from 'src/app/shared/components/lozenge/lozenge-wrapper';

@Component({
  selector: 'app-lozenge',
  template: `<span [id]="id"><ng-content></ng-content></span>`,
  styleUrls: ['./lozenge.component.scss']
})
export class LozengeComponent implements OnInit {
  @Input() id: any = "";
  @Input() backgroundColor: any = "";
  @Input() color: any = "";
  @Input() appearance: any = "";
  @Input() isBold: boolean = true;
  @Input() textContent: string = "";

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
      React.createElement(LozengeWrapper, { 
        appearance: this.appearance, 
        label: this.textContent || this.elt.nativeElement.textContent, 
        backgroundColor: this.backgroundColor,
        color: this.color,
        isBold: this.isBold }),
      document.getElementById(this.id)
    );
  }

}
