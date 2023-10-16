const MemuItems = [
 {name : "Burgur", price:5.99},
 {name : "Soda", price:2.99},
 {name : "Fizza", price:1.99},
]
MenuItems.sort((a,b)=> a.name - b.name)
console.log(MenuItems[0].price)