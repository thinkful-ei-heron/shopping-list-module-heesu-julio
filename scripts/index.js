import store from './store.js';
import shoppingList from './shopping-list.js';
import item from './item.js';

const main = function () {
  shoppingList.bindEventListeners();
  shoppingList.render();
};

store.addItem('bananas');
store.addItem('apples');
store.addItem('rice');


$(main);

export default {
  main,
}


