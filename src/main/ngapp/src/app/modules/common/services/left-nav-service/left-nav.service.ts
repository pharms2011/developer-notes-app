import {Injectable, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class LeftNavService implements OnInit {

  private leftNav: MatSidenav;

  constructor() { }

  ngOnInit() {

  }

  public setLeftNav(leftNav: MatSidenav) {
    console.log('LeftNavService: left Nav set to ' + leftNav);
    this.leftNav = leftNav;
  }

  toggleLeftNav() {
    console.log('LeftNavService: toggle');
    return this.leftNav.toggle();
  }
}
