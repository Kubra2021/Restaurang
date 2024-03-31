export default async function adminPageIndex() {

return `
<div id="admin">
  <div id="adminButtons">
    <button style="border-radius: 8px; " id="adminCreateItem">Create New Item</button>
    <button style="border-radius: 8px; " id="adminEditItem">Edit Item</button>
    <button style="border-radius: 8px; " id="adminDeleteItem">Delete Item</button>
    <button style="border-radius: 8px; " id="handleLogout">Logout</button>
  </div>
  <div id="adminInfoContainer"></div>
</div>
`;
}
