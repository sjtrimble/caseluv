import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavComponent } from './nav/nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import {
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
} from '@angular/material';
import { PhoneSelectComponent } from './phone-select/phone-select.component';
import { ShowProductsComponent } from './show-products/show-products.component';

@NgModule({
    declarations: [
        AppComponent,
        NavComponent,
        PhoneSelectComponent,
        ShowProductsComponent,
    ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        LayoutModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatListModule,
        MatCardModule,
        RouterModule.forRoot([
            {
                path: '',
                component: PhoneSelectComponent,
            },
            {
                path: 'phones/:phone',
                component: ShowProductsComponent,
            },
        ]),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
