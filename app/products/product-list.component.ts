import { Component,OnInit } from '@angular/core';
import {IProduct } from './product';

@Component({
    selector: 'pm-products',
    moduleId:module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']
    //templateUrl: 'app/products/product-list.component.html',
    //styleUrls: ['app/products/product-list.component.css']
})

export class ProductListComponent implements OnInit  {

    pageTitle: string = "Product List";
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'ook';
    products: IProduct[] = [
        { 'productId': 2, 'productName': 'Pen OOk', 'productAvailability': 8, 'price': 40, 'rating': 2.5, 'imageUrl': '/images/pen.png','releaseDate':'','description':'' },
        { 'productId': 3, 'productName': 'Book', 'productAvailability': 8, 'price': 30, 'rating': 5, 'imageUrl': '/images/book.png', 'releaseDate': '', 'description': '' },
        { 'productId': 4, 'productName': 'Angular Book', 'productAvailability': 8, 'price': 30, 'rating': 5, 'imageUrl': '/images/book.png', 'releaseDate': '', 'description': '' }];

    toggleImage(): void{ this.showImage = !this.showImage; }
    ngOnInit(): void { console.log('In OnInit');}
}