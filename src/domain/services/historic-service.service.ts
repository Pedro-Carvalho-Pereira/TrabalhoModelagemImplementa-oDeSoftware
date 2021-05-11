import { stringify } from '@angular/compiler/src/util';
import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { promise } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class HistoricServiceService {
  private iterator: number = 0;


  constructor(private storage: Storage) {
    this.init();
   }

   async init() {
    // If using, define drivers here: await this.storage.defineDriver(/*...*/);
    const storage = await this.storage.create();
    this.storage = storage;
  }

  public sethistoric( value: string) {
    this.storage.set(value, value);
    this.iterator = this.iterator + 1;

  }

  public clearHistoric(){
    this.storage.clear();
  }

  public getAll(){
    let cityNames: HistoricList[]=[];

    return this.storage.forEach((value: string,key: string,iterationNumber: number) => {
      let cityList = new HistoricList();
      cityList.key=value;
      cityNames.push(cityList);
    })
    .then(() => {
        return Promise.resolve(cityNames);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
  }

}
export class HistoricList {
  key: string;
}

