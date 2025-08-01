document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const errorMsg = document.getElementById("errorMsg");

  // Dummy credentials
  if (username === "admin" && password === "1234") {
    alert("Login successful!");
    errorMsg.textContent = "";
    // Redirect or do something else
  } else {
    errorMsg.textContent = "Invalid username or password.";
  }
});
