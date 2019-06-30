(function () {
'use strict';

var toBuy = [
  {
    name: "Milk",
    quantity: "3"
  },
  {
    name: "Donuts",
    quantity: "200"
  },
  {
    name: "Cookies",
    quantity: "300"
  },
  {
    name: "Chocolate",
    quantity: "5"
  },
  {
    name: "Coffe",
    quantity: "3"
  }
];

angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var itemAdder = this;

  itemAdder.items = ShoppingListCheckOffService.getItemsBuy();

  itemAdder.addItem = function (itemIndex) {
    ShoppingListCheckOffService.addItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var showList = this;

  showList.items = ShoppingListCheckOffService.getItems();
}


function ShoppingListCheckOffService() {
  var service = this;

  // List of shopping items
  var items = toBuy;
  //List of items bought
  var itemsBought = [];

  service.addItem = function(itemIndex) {
    itemsBought.push(items[itemIndex]);
    items.splice(itemIndex, 1);
  };

  service.getItems = function () {
    return itemsBought;
  };

  service.getItemsBuy = function () {
    return items;
  };  
}

})();
