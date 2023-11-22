function formatTime(time) {
    return time < 10 ? "0" + time : time;
}

function updateCountdown() {
    var now = new Date();
    var futureDate = new Date("2022-12-20T15:00:00"); // Coloque a data desejada aqui

    var timeDifference =  now - futureDate;

    var days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = formatTime(days) + 'd';
    document.getElementById("hours").innerText = formatTime(hours) + 'h';
    document.getElementById("minutes").innerText = formatTime(minutes) + 'm';
    document.getElementById("seconds").innerText = formatTime(seconds) + 's';
}

function navigateToJourney() {
    window.location.href = "journey.html";
}

function navigateToLetter() {
    window.location.href = "letter.html";
}

function navigateToTickets() {
    alert("Aguarde um pouquinho, princesa!");
}

// Atualizar o contador inicialmente
updateCountdown();

// Atualizar o contador a cada segundo
setInterval(updateCountdown, 1000);
