import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { City } from 'src/domain/entities/city';
import { SearchCityService } from 'src/domain/services/search-city.service';
import { Storage } from '@ionic/storage-angular';
import { HistoricServiceService,HistoricList} from 'src/domain/services/historic-service.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  [x: string]: any;
  cities: City[];
  hasError: boolean = false;
  errorMessage: string;
  iterator: number=0;

  constructor(
    private readonly searchService: SearchCityService,
    private readonly router: Router,
    private storage: Storage,
    private HistoricServiceService: HistoricServiceService
   
    
    
    
    
  ) {}

  async ngOnInit() {
     //If using a custom driver:
     //await this.storage.defineDriver(MyCustomDriver)
  }

  async onSearch(query: string) {
    try {
      this.hasError = false;
      this.cities = await this.searchService.search(query);
    } catch (error) {
      this.hasError = true;
      this.errorMessage = error.message;
    }
  }


  onClick(){

    this.HistoricServiceService.getAll()
    .then(results => {
      this.citynames = results;
    })
  }

  onClickClean(){
    this.HistoricServiceService.clearHistoric();
  }

  onSelectCity(cityId: string,cityName: string) {
    this.HistoricServiceService.sethistoric(cityName);
    this.router.navigateByUrl(`/weather/${cityId}`);

  }

}

