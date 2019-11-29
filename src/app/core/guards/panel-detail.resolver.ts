import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import * as jwt_decode from 'jwt-decode';


@Injectable()
export class PanelDetailResolver implements Resolve<any> {

  constructor() { }
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> | Promise<any> | any {

    const jwtNoPanel = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9maWxlIjp7IlBhaW5lbEEiOmZhbHNlLCJQYWluZWxCIjpmYWxzZX19.jxHEf6DXkfOwcWL6mTnzd9lMy7QZLNvg8p_7gJ-BJqM"
    const jwtPanelA = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9maWxlIjp7IlBhaW5lbEEiOnRydWUsIlBhaW5lbEIiOmZhbHNlfX0.4Ee96WTCnno0LefvJOwbEOAA0XUNIl2-tSN7MLRu-Lo"
    const jwtPanelB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9maWxlIjp7IlBhaW5lbEEiOmZhbHNlLCJQYWluZWxCIjp0cnVlfX0.6gJ1vvgtlQIpK_WQUvxc5WyLVUArprNABFNFlQt5flI"
    const jwtPanelAB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJwcm9maWxlIjp7IlBhaW5lbEEiOnRydWUsIlBhaW5lbEIiOnRydWV9fQ.6h9X9wXOI6y8rjm5bSDuK6JDG4Z26edM97LYH4nDpvo"

    return jwt_decode(jwtNoPanel).profile;
    // return jwt_decode(jwtPanelA).profile;
    // return jwt_decode(jwtPanelAB).profile;
  }
}

