import {Component, EventEmitter, Inject, OnInit, Output} from '@angular/core';
import {LeftNavService} from '../../services/left-nav-service/left-nav.service';
import {MAT_DIALOG_DATA, MatDialog, MatDialogRef} from '@angular/material';

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Output()toggleSidenav = new EventEmitter<void>();

  constructor( private leftNavService: LeftNavService) { }

  ngOnInit() {
  }

  toggleLeftNav() {
    console.log('Header: toggle' + this.leftNavService.toggleLeftNav());
  }
}

