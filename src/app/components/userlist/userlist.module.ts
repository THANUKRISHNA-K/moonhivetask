import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserlistRoutingModule } from './userlist-routing.module';
import { UserlistComponent } from './userlist.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UserlistComponent],
  exports: [UserlistComponent],
  imports: [
    CommonModule,
    UserlistRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class UserlistModule {}
