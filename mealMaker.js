const menu = {

    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    get appetizers() {
  
      },
    set appetizers(appetizerIn) {
  
      },
    get mains() {
  
      },
    set mains(mainIn) {
  
      },
    get desserts() {
  
      },
    set desserts(desertIn) {
  
      },
    get courses() {
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts,
      }
    },
    addDishToCourse (courseName, dishName, dishPrice) {
      const dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);
    },
  
    getRandomDishFromCourse: function (courseName) {
      const dishes = this._courses[courseName];
  
      const randomIndex = Math.floor(Math.random() * dishes.length);
      return dishes[randomIndex]
    },
  
    generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
  
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is $${totalPrice}`
  }
  
  };
  
  menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
  menu.addDishToCourse('mains', 'Filet', 10.25);
  menu.addDishToCourse('desserts', 'Cheesecake', 15.25);
  
  menu.addDishToCourse('appetizers', 'Pickles', 3.25);
  menu.addDishToCourse('mains', 'Halibut', 15.25);
  menu.addDishToCourse('desserts', 'Angelfood', 9.25);
  
  
  
  let meal = menu.generateRandomMeal();
  
  console.log(meal)
  
  
  
  