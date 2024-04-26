document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission

    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Perform authentication (e.g., with a server-side API)
    if (username === "user" && password === "user123") {
        showMessage("Welcome User!");
        openDashboard();
    } else {
        showMessage("Invalid username or password.");
    }
});

function showMessage(message) {
    alert(message);
}

function openDashboard() {
    window.location.href = "dashboard.html";
}

function showDetails(option) {
    switch (option) {
        case 'customers':
            showMessage("Sample Customer Details");
            break;
        case 'accounts':
            showMessage("Sample Account Details");
            break;
        case 'branches':
            showMessage("Sample Branch Details");
            break;
        case 'transactions':
            showMessage("Sample Transaction Details");
            break;
        case 'loans':
            showMessage("Sample Loan Details");
            break;
        case 'credit-cards':
            showMessage("Sample Credit Card Details");
            break;
        case 'investments':
            showMessage("Sample Investment Details");
            break;
        default:
            break;
    }
}

function logout() {
    window.location.href = "index.html";
}
