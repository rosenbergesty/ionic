import { NgModule } from '@angular/core';
import { TranslateModule } from '@ngx-translate/core';
import { IonicPageModule } from 'ionic-angular';

import { DriversListPage } from './drivers-list';

@NgModule({
  declarations: [
    DriversListPage,
  ],
  imports: [
    IonicPageModule.forChild(DriversListPage),
    TranslateModule.forChild()
  ],
  exports: [
    DriversListPage
  ]
})
export class DriverListPageModule { }
