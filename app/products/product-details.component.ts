import { IProduct } from "./product";
import { Component } from "@angular/core";
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from "@angular/core";

@Component({
    moduleId: module.id,
    templateUrl:'product-detail.component.html'
})
export class ProductDetailComponent implements OnInit {
    pageTitile: string = "Product Detail";
    product: IProduct

    constructor(private _route: ActivatedRoute,private _router:Router) {

    }
    ngOnInit(): void{
        let id = +this._route.snapshot.params['id'];
        this.pageTitile += `:${id}`;
    }
    onBack(): void {
        this._router.navigate(['/products'])
    }
}