var ctx = document.getElementById('chart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['7:10', '8:10', '9:10', '10:10', '11:10', '12:10', '13:10'],
        datasets: [{
            label: 'переходов на лендинг',
            data: [0, 20, 60, 40, 80, 60, 20],
            borderColor: 'rgba(59, 49, 214, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'переходов с лендинга в бот',
            data: [60, 40, 20, 60, 20, 40, 100],
            borderColor: 'rgba(238, 195, 45, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'переходов с лендинга в бот',
            data: [20, 80, 60, 20, 40, 20, 60],
            borderColor: 'rgba(253, 62, 64, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        aspectRatio: 3,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

var ctx = document.getElementById('chart2').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['7:10', '8:10', '9:10', '10:10', '11:10', '12:10', '13:10'],
        datasets: [{
            label: 'переходов на лендинг',
            data: [0, 20, 60, 40, 80, 60, 20],
            borderColor: 'rgba(59, 49, 214, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'переходов с лендинга в бот',
            data: [60, 40, 20, 60, 20, 40, 100],
            borderColor: 'rgba(238, 195, 45, 1)',
            borderWidth: 2,
            fill: false
        }, {
            label: 'переходов с лендинга в бот',
            data: [20, 80, 60, 20, 40, 20, 60],
            borderColor: 'rgba(253, 62, 64, 1)',
            borderWidth: 2,
            fill: false
        }]
    },
    options: {
        aspectRatio: 3,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});