import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LozengeComponent } from './components/lozenge/lozenge.component';
import { DropDownComponent } from './components/drop-down/drop-down.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ButtonComponent } from './components/button/button.component';
import { FormFieldMessageComponent } from './components/form-field-message/form-field-message.component';
import { TextInputComponent } from './components/text-input/text-input.component';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    LozengeComponent,
    DropDownComponent,
    LoaderComponent,
    ButtonComponent,
    FormFieldMessageComponent,
    TextInputComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    LozengeComponent,
    DropDownComponent,
    LoaderComponent,
    ButtonComponent,
    FormFieldMessageComponent,
    TextInputComponent,
    NgxSkeletonLoaderModule
  ]
})
export class SharedModule { }
