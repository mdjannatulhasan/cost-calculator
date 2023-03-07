var ctx = document.getElementById("ctx").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Laufzeit", "Standby"],
        datasets: [{
            data: [50, 50],
            borderColor: ['#52b1ff', '#82ff87'],
            backgroundColor: ['#52b1ff', '#82ff87'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});
var ctx = document.getElementById("ctx2").getContext('2d');

var myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
        labels: ["Laufzeit", "Standby"],
        datasets: [{
            data: [50, 50],
            borderColor: ['#52b1ff', '#82ff87'],
            backgroundColor: ['#52b1ff', '#82ff87'],
            borderWidth: 0
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
    }
});