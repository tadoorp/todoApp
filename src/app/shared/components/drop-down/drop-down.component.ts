import {
  Component,
  Input,
  Output,
  EventEmitter
} from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import DropdownReactComponent from 'src/app/shared/components/drop-down/drop-down-wrapper';

@Component({
  selector: 'app-drop-down',
  template: `<span [id]="id"></span>`,
  styleUrls: ['./drop-down.component.scss']
})
export class DropDownComponent {

  @Input() items: any = [];
  @Output() change = new EventEmitter<any>();
  @Input() id: any = "";
  @Input() buttonLabel: string = '';

  private hasViewLoaded = false;

  constructor() {

  }

  ngOnInit(){
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
      React.createElement(DropdownReactComponent, { 
        items: this.items, 
        buttonLabel: this.buttonLabel,
        onChange: (res: any) => {
          this.change.emit(res)
        }
      }),
      document.getElementById(this.id)
    );
  }

}
