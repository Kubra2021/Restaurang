
export default async function adminLoginPage() {

  const adminLoginPageHTML = `
    <div class="admin-login-container">
      <h1>Admin Login</h1>
      <form id="adminLoginForm">
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <button type="submit" id="loginBtn">Login</button>
      </form>
    </div>
  `;

  $('main').html(adminLoginPageHTML);

  $('#adminLoginForm').on('submit', async function (event) {
    event.preventDefault();

    const username = $('#username').val();
    const password = $('#password').val();

  
    const loggedIn = await login(username, password);

    
    if (loggedIn) {
      window.location.href = '#admin';
    } else {
      alert('Invalid username or password. Please try again.'); 
    }
  });

  
  async function login(username, password) {
    
    const storedCredentials = {
      username: 'admin',
      password: 'a12345'
    };

    await new Promise(resolve => setTimeout(resolve, 500));

    if (username === storedCredentials.username && password === storedCredentials.password) {
      return true;
    } else {
      return false;
    }
  }
}
