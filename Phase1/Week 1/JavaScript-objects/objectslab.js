let fruit = {
    name: "Apple",
    color: "Red",
    taste: "Sweet"
  };
  
  function updateFruitWithKeyAndValue(fruit, key, value) {
    return { ...fruit, [key]: value };
  }
  
  function destructivelyUpdateFruitWithKeyAndValue(fruit, key, value) {
    fruit[key] = value;
    return fruit;
  }
  
  function deleteFromFruitByKey(fruit, key) {
    const newFruit = { ...fruit };
    delete newFruit[key];
    return newFruit;
  }
  
  function destructivelyDeleteFromFruitByKey(fruit, key) {
    delete fruit[key];
    return fruit;
  }
  
  console.log("Original fruit: ", fruit);
  
  const updatedFruitNonDestructive = updateFruitWithKeyAndValue(fruit, "color", "Green");
  console.log("Updated fruit (non-destructive): ", updatedFruitNonDestructive);
  
  const updatedFruitDestructive = destructivelyUpdateFruitWithKeyAndValue(fruit, "color", "Yellow");
  console.log("Updated fruit (destructive): ", updatedFruitDestructive);
  
  const fruitWithoutColorNonDestructive = deleteFromFruitByKey(fruit, "color");
  console.log("Deleted color property (non-destructive): ", fruitWithoutColorNonDestructive);
  
  const fruitWithoutColorDestructive = destructivelyDeleteFromFruitByKey(fruit, "color");
  console.log("Deleted color property (destructive): ", fruitWithoutColorDestructive);
  