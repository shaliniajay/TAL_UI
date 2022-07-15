import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { TalPremiumCalculatorComponent } from './tal-premium-calculator/tal-premium-calculator.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgMaterialModule } from './ng-material/ng-material.module';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    NgMaterialModule,
    RouterModule.forRoot([
      { path: 'product', component: ProductListComponent },
      { path: '', component: TalPremiumCalculatorComponent },
    ]),
    BrowserAnimationsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    TalPremiumCalculatorComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }


/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/