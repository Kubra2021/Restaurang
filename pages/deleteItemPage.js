import { fetchData, sendData } from '../server-request.js';

function createSelectOptions(items) {
  return items.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
}

export default async function deleteItemPage() {
  try {
  
    const menuData = await fetchData();

    const categories = Object.keys(menuData.menu);

    const deleteItemPageContent = `
        <div id="deleteItemPage">
            <h2>Delete Item</h2>
            <form id="deleteItemForm">
                <label for="category">Category:</label>
                <select id="category" name="category">
                    <option value="" disabled selected>Select Category</option>
                    ${categories.map(category => `<option value="${category}">${category}</option>`).join('')}
                </select><br><br>
                <label for="item">Item:</label>
                <select id="item" name="item">
                    <option value="" disabled selected>Select Item</option>
                </select><br><br>
                <button type="submit">Delete Item</button>
            </form>
        </div>
    `;

    $('main').html(deleteItemPageContent);

    $('#category').on('change', function () {
      const selectedCategory = $(this).val();
      const items = menuData.menu[selectedCategory];
      const selectOptions = createSelectOptions(items);
      $('#item').html(selectOptions);
    });

    $('#deleteItemForm').on('submit', async function (event) {
      event.preventDefault();

      const category = $('#category').val();
      const itemId = $('#item').val();

      try {
        const selectedItemIndex = menuData.menu[category].findIndex(item => item.id == itemId);

        if (selectedItemIndex !== -1) {

          menuData.menu[category].splice(selectedItemIndex, 1);

          await sendData(menuData);


          window.location.href = '#admin';
        } else {
          alert('Item not found');
        }
      } catch (error) {
        console.error('Error deleting item:', error);
        alert('Error deleting item. Please try again later.');
      }
    });
  } catch (error) {
    console.error('Error fetching menu data:', error);
    alert('Error fetching menu data. Please try again later.');
  }
}
