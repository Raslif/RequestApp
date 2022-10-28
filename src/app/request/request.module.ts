import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RequestDetailsComponent } from '../components/request-details/request-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [RequestDetailsComponent],
  imports: [CommonModule, FormsModule, NgbModule, ReactiveFormsModule],
  exports: [RequestDetailsComponent],
})
export class RequestModule {}
