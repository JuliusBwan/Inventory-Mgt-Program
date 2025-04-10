const inventory = [{name:"bikes", quantity:5}, {name:"cars", quantity:4}];

function findProductIndex(name){
  for (const product of inventory){
    if (name.toLowerCase() === product.name.toLowerCase()){
      return inventory.indexOf(product);
    }
  }
  return -1;
}

function addProduct(prodObj){
  for (const product of inventory){
    if (prodObj.name.toLowerCase() === product.name.toLowerCase()){
      product.quantity += prodObj.quantity;
      console.log(`${product.name.toLowerCase()} quantity updated`);
      return;
    }
    
  }
  prodObj.name = prodObj.name.toLowerCase();
  inventory.push(prodObj);
  console.log(`${prodObj.name} added to inventory`);
}


function removeProduct(name, quantity){
  for (const product of inventory){
    if(name.toLowerCase() === product.name.toLowerCase()){

      if (product.quantity - quantity < 0){
        console.log(`Not enough ${product.name.toLowerCase()} available, remaining pieces: ${product.quantity}`);
        return;
      }

      product.quantity -= quantity;
      console.log(`Remaining ${product.name.toLowerCase()} pieces: ${product.quantity}`);

      if (product.quantity === 0){
        const prodIndex = inventory.indexOf(product);
        inventory.splice(prodIndex, 1);
      } 
      return;    
    }    
  }
  console.log(`${name.toLowerCase()} not found`)
}
