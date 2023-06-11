import Service from '@ember/service';
// import { tracked } from '@glimmer/tracking';

export default class ShoppingCartService extends Service {
  itemList = [];

  addItem(item) {
    this.itemList = [...this.itemList, item];
  }
}
