// Напиши скрипт, який:

// Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
// Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

// В результаті, в консолі будуть виведені наступні повідомлення.

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5

const categories = document.querySelector(`#categories`);
const numberOfCategories = categories.querySelectorAll(`.item`);


console.log(`Number of categories: ${numberOfCategories.length}`);

numberOfCategories.forEach(item => {
  const titleOfCategory = item.querySelector('h2').textContent;
  const numberOfElements = item.querySelectorAll('li').length;

  console.log(`Category: ${titleOfCategory}
  Elements: ${numberOfElements}`);
});