import { Injectable } from '@angular/core';

import { Driver } from '../../models/driver';
import { Api } from '../api/api';

@Injectable()
export class Drivers {
  items: Drivers[] = [];

  defaultDriver: any = {
    "name": "Burt Bear",
    "profilePic": "assets/img/speakers/bear.jpg",
    "about": "Burt is a Bear.",
  };

  constructor(public api: Api) { 
    this.query().subscribe(
      // value => console.log(value)
    )
  }

  query(params?: any) {
    return this.api.get('/fetch-all-drivers.php');
  }

  // query(params?: any) {
  //   if (!params) {
  //     return this.items;
  //   }

  //   return this.items.filter((item) => {
  //     for (let key in params) {
  //       let field = item[key];
  //       if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
  //         return item;
  //       } else if (field == params[key]) {
  //         return item;
  //       }
  //     }
  //     return null;
  //   });
  // }
  add(item: Driver) {
  }

  delete(item: Driver) {
  }

}
