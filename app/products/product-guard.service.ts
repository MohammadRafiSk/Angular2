import { CanActivate, ActivatedRouteSnapshot,Router } from "@angular/router";
import { Injectable } from "@angular/core";


@Injectable()
export class ProductDetailGaurd implements CanActivate {

    constructor(private _router: Router) {
      }
    canActivate(route: ActivatedRouteSnapshot): boolean {
        let id = +route.url[1].path;
        if (isNaN(id) || id < 2) {
            alert('invalid route');
            this._router.navigate(['/products']);
            return false;
        }
        return true;
    }
}