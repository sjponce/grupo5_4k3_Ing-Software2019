import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injectable } from '@angular/core';
import { MatButtonModule, MatSelectModule, MatRadioModule, MatDatepickerModule,MatFormFieldModule, MatTableModule, MatButtonToggleModule, MatIconModule, MatStepperModule, MatInputModule, MatNativeDateModule } from '@angular/material'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent} from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OwlDateTimeModule, OwlNativeDateTimeModule } from 'ng-pick-datetime';
 
 

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    MatTableModule,
    MatButtonToggleModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    MatButtonModule,
    AppRoutingModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatStepperModule,
    HttpClientModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatRadioModule,
    MatDatepickerModule,
    MatNativeDateModule,
    OwlDateTimeModule, 
    OwlNativeDateTimeModule,
  ],
  providers: [FormBuilder,MatDatepickerModule],
  bootstrap: [AppComponent]
})
@Injectable({providedIn: 'root'})
export class AppModule { }
