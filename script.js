//Virtual currency balance
let balance = 0;

// Function to update the balance on the webpage
function updateBalance() {
  document.getElementById("balanceAmount").innerText = balance + " B";
}

// Function to handle the spin button click event
function spin() {
  // Simulate the casino game logic
  // Here, you can implement your own game rules and logic
  // For simplicity, let's assume the user wins 10 B every time
  balance += 10;
  
  // Update the balance on the webpage
  updateBalance();
}

// Event listener for the spin button click
document.getElementById("spinButton").addEventListener("click", spin);

// Admin Panel
const adminPanel = document.getElementById("adminPanel");
const userSelect = document.getElementById("userSelect");
const balanceInput = document.getElementById("balanceInput");
const updateBalanceButton = document.getElementById("updateBalanceButton");

// Mock user data (for demonstration)
const users = [
  { id: 1, name: "John" },
  { id: 2, name: "Jane" },
  { id: 3, name: "Admin", isAdmin: true }
];

// Populate the user select options
users.forEach(user => {
  const option = document.createElement("option");
  option.value = user.id;
  option.text = user.name;
  userSelect.appendChild(option);
});

// Function to update the balance for a selected user
function updateBalanceForUser() {
  const selectedUserId = parseInt(userSelect.value);
  const selectedUser = users.find(user => user.id === selectedUserId);

  if (selectedUser && selectedUser.isAdmin) {
    const newBalance = parseInt(balanceInput.value);
    
    if (!isNaN(newBalance)) {
      balance = newBalance;
      updateBalance();
      alert(`The balance for ${selectedUser.name} has been updated to ${newBalance} B.`);
    } else {
      alert("Invalid balance input. Please enter a valid number.");
    }
  } else {
    alert("You don't have permission to update the balance for this user.");
  }
}

// Event listener for the update balance button click
updateBalanceButton.addEventListener("click", updateBalanceForUser);

// Function to show/hide the admin panel based on user's admin status
function toggleAdminPanel() {
  const selectedUserId = parseInt(userSelect.value);
  const selectedUser = users.find(user => user.id === selectedUserId);
  
  if (selectedUser && selectedUser.isAdmin) {
    adminPanel.style.display = "block";
  } else {
    adminPanel.style.display = "none";
  }
}

// Event listener for the user select change
userSelect.addEventListener("change", toggleAdminPanel);

// Initial balance update
updateBalance();
