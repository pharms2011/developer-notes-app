import {Component, ViewChild, OnInit} from '@angular/core';
import {MatSidenav} from '@angular/material';
import {Router} from '@angular/router';
import {LeftNavService} from './modules/common/services/left-nav-service/left-nav.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'ngapp';

  @ViewChild('leftNav')public leftNav: MatSidenav;

  constructor(private leftNavService: LeftNavService) {}

  ngOnInit() {
    console.log('AppComponent:');
    console.log(this.leftNav);
    this.leftNav.open();
    this.leftNavService.setLeftNav(this.leftNav);
  }

}
