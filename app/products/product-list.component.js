"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductListComponent = /** @class */ (function () {
    function ProductListComponent() {
        this.pageTitle = "Product List";
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = 'ook';
        this.products = [
            { 'productId': 2, 'productName': 'Pen OOk', 'productAvailability': 8, 'price': 40, 'rating': 2.5, 'imageUrl': '/images/pen.png', 'releaseDate': '', 'description': '' },
            { 'productId': 3, 'productName': 'Book', 'productAvailability': 8, 'price': 30, 'rating': 5, 'imageUrl': '/images/book.png', 'releaseDate': '', 'description': '' },
            { 'productId': 4, 'productName': 'Angular Book', 'productAvailability': 8, 'price': 30, 'rating': 5, 'imageUrl': '/images/book.png', 'releaseDate': '', 'description': '' }
        ];
    }
    ProductListComponent.prototype.toggleImage = function () { this.showImage = !this.showImage; };
    ProductListComponent.prototype.ngOnInit = function () { console.log('In OnInit'); };
    ProductListComponent = __decorate([
        core_1.Component({
            selector: 'pm-products',
            moduleId: module.id,
            templateUrl: 'product-list.component.html',
            styleUrls: ['product-list.component.css']
            //templateUrl: 'app/products/product-list.component.html',
            //styleUrls: ['app/products/product-list.component.css']
        })
    ], ProductListComponent);
    return ProductListComponent;
}());
exports.ProductListComponent = ProductListComponent;
//# sourceMappingURL=product-list.component.js.map