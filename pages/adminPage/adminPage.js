import { getAll, create, remove, update } from "../../server-request.js";

const container = $("#adminInfoContainer");

const itemForm = `
<div id="createItemForm" style="max-width: 400px; margin: 0 auto;">
<form id="createItemForm" style="display: flex; flex-direction: column; padding: 20px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">

    <label for="category">Category:</label>
    <input type="text" id="title" name="title" required style="margin-bottom: 10px;">
    
    <label for="name">Name:</label>
    <input type="name" id="name" name="name" required style="margin-bottom: 10px;">
  
    <label for="description">Description:</label>
    <textarea id="description" name="description" required style="margin-bottom: 10px;"></textarea>
    
    <label for="price">Price:</label>
    <input type="number" id="price" name="price" required style="margin-bottom: 10px;">
     
    <button type="button" id="submitEvent" style="background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer;">Create Event</button>
</form>
</div>
`;

export function loadItemListeners() {
 
  $("#adminCreateItem").on("click", function () {
    displayInfo("Create New Item");
    displayCreateItemForm()
  });

  $("#adminEditItem").on("click", function () {
    displayInfo("Edit Item");
    displayEditItemForm()
  });

  $("#adminDeleteItem").on("click", function () {
    displayInfo("Delete Item");
    displayDeleteItem()
  });

  $("#handleLogout").on("click", async function () {
    window.location.href = "#start"; 
  });
}

function displayInfo(title) {
  $("#adminInfoContainer").html('<div id="display-parent" style="padding: 20px; background-color: #f8f8f8; border: 1px solid #ddd;"><h2>' + title + '</h2></div>');
}

async function displayAllBookings() {
  const bookingsContainer = $(`<div style="border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;"
  >`);

 /* const data = await getAll('bookings')

  data.forEach((booking) => {
    const bookingElement = `
      <div style="margin: 8px; padding: 16px; background-color: lightskyblue; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
      <p style="font-weight: bold; margin-bottom: 8px;">${booking.name} ${booking.surname}</p>
      <p style="margin-bottom: 4px;">Email: ${booking.email}</p>
      <p style="margin-bottom: 4px;">Mobile: ${booking.mobile}</p>
      </div>  
      `
    bookingsContainer.append(bookingElement)
  })
  $('#display-parent').append(bookingsContainer);
*/
}

function displayCreateItemForm() {
  const displayParent = $("#display-parent");

  displayParent.append(itemForm);

  $("#submit Item").on("click", function () {
    const category = $("#category").val();
    const name = $("#name").val();
    const description = $("#description").val();
    const price = $("#price").val();
    

    if (category && name && description && price ) {
      const newItem = { category, name, description, price };
      create("items", newItem)
      $("#createItemForm").remove(); // Remove the form after submission
      alert("Item created successfully!");
    } else {
      alert("Please fill in all information!");
    }
  })
}

async function displayEditItemForm() {
  const itemsContainer = $(`<div style="border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;"
  >`);

  const displayParent = $("#display-parent");
  const items = await getAll('items')

  items.forEach((item) => {
    const itemElement = `
  <div style="margin: 8px; padding: 16px; background-color: lightskyblue; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <p style="font-weight: bold; margin-bottom: 8px;">Event: ${item.category}</p>
  <p style="margin-bottom: 8px;">Scene: ${item.name}</p>
  <p style="margin-bottom: 4px;">Date: ${item.price}</p>
  <button id="editEvent-${item.id}" style="background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer;">Edit</button>
  </div>  
  `
    itemsContainer.append(itemElement)

    displayParent.on("click", `#editItem-${item.id}`, function () {
      itemsContainer.remove()
      displayParent.append(eventForm)

      $("#category").val(item.category);
      $("#name").val(item.name);
      $("#description").val(item.description);
      $("#price").val(item.price);
      $("#submitItem").html("Update")

      $("#submitItem").on("click", function () {
        const category = $("#category").val();
        const name = $("#name").val();
        const description = $("#description").val();
        const price = $("#price").val();

        if (category && name && description && price) {
          const newItem = { category, name, description, price };
          create("items", newItem)
          $("#createItemForm").remove(); // Remove the form after submission
          alert("Item created successfully!");
        } else {
          alert("Please fill in all information!");
        }


      });

    })
    $('#display-parent').append(itemsContainer);
  })
}

async function displayDeleteItem() {
  const itemsContainer = $(`<div style="border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;"
  >`);

  const displayParent = $("#display-parent");
  const items = await getAll('items')

  items.forEach((item) => {
    const itemElement = `
  <div style="margin: 8px; padding: 16px; background-color: lightskyblue; border-radius: 8px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);">
  <p style="font-weight: bold; margin-bottom: 8px;">Event: ${item.category}</p>
  <p style="margin-bottom: 8px;">Scene: ${item.name}</p>
  <p style="margin-bottom: 4px;">Date: ${item.price}</p>
  <button id="editEvent-${item.id}" style="background-color: #4CAF50; color: white; padding: 10px; border: none; cursor: pointer;">Edit</button>
  </div>  
  `
    itemsContainer.append(itemElement)

    displayParent.on("click", `#editItem-${item.id}`, async function () {
      await remove("items", item.id);


    });

  })
  $('#display-parent').append(itemsContainer);

}
