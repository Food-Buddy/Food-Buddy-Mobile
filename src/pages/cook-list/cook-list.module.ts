import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CookListPage } from './cook-list';

@NgModule({
  declarations: [
    CookListPage,
  ],
  imports: [
    IonicPageModule.forChild(CookListPage),
  ],
})
export class CookListPageModule {}
