import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController } from 'ionic-angular';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

import { Driver } from '../../models/driver';
import { Drivers } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-list-master',
  templateUrl: 'drivers-list.html'
})
export class DriversListPage {
  currentItems: Driver[];

  constructor(public navCtrl: NavController, public drivers: Drivers, public modalCtrl: ModalController) {
    // this.currentItems = this.drivers.query();
    var driverObservable = this.drivers.query();
    var subscription = driverObservable.subscribe(
      value => this.currentItems = value
     );
  }

  /**
   * The view loaded, let's query our items for the list
   */
  ionViewDidLoad() {
  }

  /**
   * Prompt the user to add a new item. This shows our ItemCreatePage in a
   * modal and then adds the new item to our data source if the user created one.
   */
  addItem() {
    let addModal = this.modalCtrl.create('ItemCreatePage');
    addModal.onDidDismiss(item => {
      if (item) {
        this.items.add(item);
      }
    })
    addModal.present();
  }

  /**
   * Delete an item from the list of items.
   */
  deleteItem(item) {
    this.items.delete(item);
  }

  /**
   * Navigate to the detail page for this item.
   */
  openItem(item: Driver) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
