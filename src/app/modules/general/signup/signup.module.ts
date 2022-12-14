import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SignupRoutingModule } from './signup-routing.module';
import { SignupComponent } from './signup.component';

@NgModule({
  imports: [CommonModule, SignupRoutingModule],
  exports: [SignupComponent],
  declarations: [SignupComponent],
  providers: [],
})
export class SignupModule {}
