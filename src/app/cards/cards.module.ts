import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // FormsModule'ü ekleyin
import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    CardsRoutingModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class CardsModule { }
