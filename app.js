/*const baseURL = "http://localhost:3000";

async function fetchData() {
  const response = await fetch(`${baseURL}/menu`);
  const json = await response.json();
  return json;
}

async function displayMenu() {
  try {
    const menuData = await fetchData();
    $("#app").empty(); 

    if (!menuData || !menuData.menu) {
      $("#app").append("<p>No menu items available.</p>");
      return;
    }

    const menu = menuData.menu;

    Object.keys(menu).forEach(category => {
      const categoryItems = menu[category];
      $("#app").append(`<h2>${category}</h2>`);
     
      if (Array.isArray(categoryItems)) {
        categoryItems.forEach(item => {
          const itemHtml = `
            <div class="menu-item">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p>Price: ${item.price} SEK</p>
            </div>
          `;
          $("#app").append(itemHtml);
        });
      } else {
        console.error(`Error: ${category} items is not an array.`);
      }
    });
  } catch (error) {
    console.error('Error fetching and displaying menu data:', error);
  }
}

$(document).ready(function () {
  displayMenu();
});

export { displayMenu };



const baseURL = "http://localhost:3000";

async function fetchData() {
  try {
    const response = await fetch(`${baseURL}/menu`);
    const json = await response.json();
    return json;
  } catch (error) {
    console.error('Error fetching menu data:', error);
    return null;
  }
}

async function displayMenu() {
  try {
    const menuData = await fetchData();
    $("#app").empty();

    if (!menuData || Object.keys(menuData).length === 0) {
      $("#app").append("<p>No menu items available.</p>");
      return;
    }

    // Her bir ana kategori için döngü
    for (const category in menuData) {
      if (menuData.hasOwnProperty(category)) {
        const categoryItems = menuData[category];

        // Kategori başlığını ekle
        $("#app").append(`<h2>${category}</h2>`);

        // Kategori içindeki öğeleri döngüyle işle
        categoryItems.forEach(item => {
          const itemHtml = `
            <div class="menu-item">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p>Price: ${item.price} SEK</p>
            </div>
          `;
          $("#app").append(itemHtml);
        });
      }
    }
  } catch (error) {
    console.error('Error fetching and displaying menu data:', error);
  }
}

$(document).ready(function () {
  displayMenu();
});
export { displayMenu };
*/

import { fetchData } from './server-request.js';

export async function displayMenu() {
  try {
    const menuData = await fetchData(); 
    $("#app").empty(); 

    if (!menuData || !menuData.menu) {
      $("#app").append("<p>No menu items available.</p>");
      return;
    }

    const menu = menuData.menu;

    Object.keys(menu).forEach(category => {
      const categoryItems = menu[category];
      $("#app").append(`<h2>${category}</h2>`);

      if (Array.isArray(categoryItems)) {
        categoryItems.forEach(item => {
          const itemHtml = `
            <div class="menu-item">
              <h3>${item.name}</h3>
              <p>${item.description}</p>
              <p>Price: ${item.price} SEK</p>
            </div>
          `;
          $("#app").append(itemHtml);
        });
      } else {
        console.error(`Error: ${category} items is not an array.`);
      }
    });
  } catch (error) {
    console.error('Error fetching and displaying menu data:', error);
  }
}

$(function () {
  displayMenu();
});
