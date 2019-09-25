import item from './item.js';

let items = [];
let hideCheckedItems = false;

function findById(id) {
    return store.items.find(id)  //finds the items unique id and returns to computer
}

function addItem(name) {
    try {
      item.validateName(name); // runs the function validate name from our item.js file
      this.items.push(item.create(name)); // adds the name onto the store
    } catch (error) {
      console.log(`Cannot add item: ${error.message}`); // returns an error messege
    }
}
  
function findAndToggleChecked(id) {
    let foundToggleChecked = this.findById(id); 
    if(foundToggleChecked) {                      // checks an item on the list
      foundToggleChecked.checked = !foundToggleChecked.checked;
    } else {
      console.log(`Cannot add item: ${error.message}`);
    }
}
  
function findAndUpdateName(id, newName) {
    try {
      item.validateName(newName);
      this.findById(id).name = newName;   // filters through new name to check that it has values
    } catch (error) {
      console.log(`Cannot update name: ${error.message}`);
    }
}
  
function findAndDelete(id) {
    this.items = this.items.filter(item => item.id !== id);  // finds the item by id and deletes the item from the store
  }
  
function toggleCheckedFilter() {
    this.hideCheckedItems = !this.hideCheckedItems; // toggles the checked item functon when the hide checked button is pressed, showing the user only list items which are yet to be completed
}
  
export default {
    items,
    hideCheckedItems,
    findById,
    addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete,
    toggleCheckedFilter
};
