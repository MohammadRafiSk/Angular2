import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { ProductFilterPipe } from './products/product.component.pipe';
import { StarComponent } from './shared/star.component';
import {HttpModule } from '@angular/http';
import { ProductDetailComponent } from './products/product-details.component';
import { WelcomeComponent } from './home/welcome.component';
import {RouterModule } from '@angular/router';
import { ProductDetailGaurd } from './products/product-guard.service';
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule, RouterModule.forRoot([
        { path: 'products', component: ProductListComponent },
        { path: 'product/:id',canActivate:[ProductDetailGaurd], component: ProductDetailComponent },
        { path: 'welcome', component: WelcomeComponent },
        { path: '', redirectTo: 'welcome', pathMatch: 'full' },
        {path:'**',redirectTo:'welcome',pathMatch:'full'}
    ])],
    
    declarations: [AppComponent, ProductListComponent, ProductFilterPipe, StarComponent, WelcomeComponent, ProductDetailComponent],
    providers:[ProductDetailGaurd],
    bootstrap:[AppComponent]
})
export class AppModule { }