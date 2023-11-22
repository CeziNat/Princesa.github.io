var passcode = "";

// Elements
var passcodeLabel = document.getElementById("passcodeLabel");


function appendToPasscode(value) {
    if (value === "backspace") {
        passcode = passcode.slice(0, -1);
    } else {
        passcode += value;
    }

    updatePasscodeLabel();
}

function updatePasscodeLabel() {
    if (passcode === "") {
        passcodeLabel.textContent = "enter passcode";
    } else {
        passcodeLabel.textContent = passcode;
    }

    if(passcode.length === 6) {
        checkPasscode();
    }
}

function checkPasscode() {
    if (passcode === "201222") {
        // Redirecionar para outra página
        window.location.href = "home.html";
    } else {
        // Redirecionar para outra página em caso de falha na autenticação
        window.location.href = "pagina-erro.html";
    }
}
