import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import { IonicStorageModule } from '@ionic/storage-angular';

import { HomePageRoutingModule } from './home-routing.module';
import { CityDetailsComponent } from './components/city-details/city-details.component';
import { SharedModule } from '../shared/modules/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    IonicStorageModule.forRoot(),
    SharedModule
  ],
  declarations: [HomePage, CityDetailsComponent],
})
export class HomePageModule {}
