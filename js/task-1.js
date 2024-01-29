const itemList = document.querySelectorAll("li.item");
console.log(`Number of categories:${itemList.length}`);
itemList.forEach((itemList) =>{
    const titleCategories = itemList.querySelector('h2').textContent;
    const element = itemList.querySelectorAll('ul li');
    console.log(`Category: ${titleCategories}`)
    console.log(`Elements: ${element.length}`)
});

