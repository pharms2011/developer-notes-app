import { NgModule } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule, MatIconModule, MatToolbarModule} from '@angular/material';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [HeaderComponent, FooterComponent, LeftNavComponent],
  exports: [
    HeaderComponent,
    MatSidenavModule,
    LeftNavComponent,
  ],
  imports: [
    MatSidenavModule,
    MatButtonModule,
    RouterModule,
    MatIconModule,
    MatToolbarModule
  ]
})
export class CommonModule { }
