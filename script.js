function showDetails(option) {
    let message = "";
    let box = document.getElementById(option);
    switch (option) {
        case 'customers':
            message = "Name: John Doe\nAge: 35\nAddress: 123 Main St\nPhone: 555-1234";
            break;
        case 'accounts':
            message = "Account Number: 123456789\nBalance: $5000\nType: Savings";
            break;
        case 'branches':
            message = "Branch Name: Main Branch\nLocation: 456 Elm St";
            break;
        case 'transactions':
            message = "Date: 2022-01-01\nType: Deposit\nAmount: $1000";
            break;
        case 'loans':
            message = "Loan Type: Home Loan\nAmount: $200000\nInterest Rate: 4%";
            break;
        case 'credit-cards':
            message = "Card Number: 1234 5678 9012 3456\nType: Visa\nLimit: $5000";
            break;
        case 'investments':
            message = "Investment Type: Mutual Funds\nAmount: $10000\nReturn Rate: 8%";
            break;
        default:
            break;
    }
    box.innerHTML = "<p>" + message + "</p>";
}

function hideDetails() {
    let boxes = document.getElementsByClassName("card");
    for (let box of boxes) {
        box.innerHTML = "<h2>" + box.id.charAt(0).toUpperCase() + box.id.slice(1) + "</h2>";
    }
}

function logout() {
    window.location.href = "login.html";
}

function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "user" && password === "user123") {
        window.location.href = "dashboard.html";
        return false; // Prevent form submission
    } else {
        alert("Invalid username or password");
        return false; // Prevent form submission
    }
}
