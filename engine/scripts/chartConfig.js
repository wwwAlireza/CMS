"use strict";

function selector(query) {
    return document.querySelector(query);
}
const viewCharts = {
    dailyView: selector("#daily-view-chart"),
    newUsers: selector("#new-users-chart"),
    salesCount: selector("#sales-count-chart"),
    newProducts: selector("#new-products-chart"),
    siteView: selector("#site-view-chart")
}

const dayNamesArray = ["شنبه", "یکشنبه", "دوشنبه", "سه شنبه", "چهارشنبه", "پنجشنبه", "جمعه"];
const generalChartOptions = {
    responsive: true,
    scales: {
        yAxes: [{
            display: false,
        }],
        xAxes: [{
            display: false,
        }]
    },
    legend: {
        display: false,
    },
    layout: {
        padding: {
            top: 5,
            right: 5,
            bottom: 5,
            left: 5
        }
    }
}


// daily
new Chart(viewCharts.dailyView, {
    type: 'line',
    data: {
        labels: dayNamesArray,
        datasets: [{
            data: [10502, 45254, 31148, 15274, 55214, 12654, 45785],
            borderColor: "#fff",
            backgroundColor: "rgba(255,255,255,.4)",
            pointBackgroundColor: "#fff"
        }, ]
    },
    options: generalChartOptions,
});

// new users
new Chart(viewCharts.newUsers, {
    type: 'bar',
    data: {
        labels: dayNamesArray,
        datasets: [{
            data: [875, 411, 2654, 1532, 475, 784, 1053],
            backgroundColor: "rgba(255,255,255,.4)",
        }, ]
    },
    options: generalChartOptions,
});

// sales count
new Chart(viewCharts.salesCount, {
    type: 'line',
    data: {
        labels: dayNamesArray,
        datasets: [{
            data: [451, 1564, 1984, 954, 1099, 2232, 3053],
            borderColor: "#fff",
            backgroundColor: "rgba(255,255,255,.4)",
            pointBackgroundColor: "#fff"
        }, ]
    },
    options: generalChartOptions,
});

// new Products
new Chart(viewCharts.newProducts, {
    type: 'bar',
    data: {
        labels: dayNamesArray,
        datasets: [{
            data: [177, 432, 841, 322, 788, 611, 537],
            backgroundColor: "rgba(255,255,255,.4)",
        }, ]
    },
    options: generalChartOptions,
});

new Chart(viewCharts.siteView, {
    type: 'line',
    data: {
        labels: dayNamesArray,
        datasets: [{
            data: [2502, 3525, 5114, 124, 2214, 1254, 1285],
            borderColor: "#0d6efd",
            backgroundColor: "rgba(0,0,0,.1)",
            pointBackgroundColor: "#fff"
        }, {
            data: [1265, 4457, 2114, 1024, 2014, 4254, 3285],
            borderColor: "#ffc107",
            backgroundColor: "rgba(0,0,0,.1)",
            pointBackgroundColor: "#fff"
        }, ]
    },
    options: {
        responsive: true,
        legend: {
            display: false,
        },
        layout: {
            padding: {
                top: 5,
                right: 5,
                bottom: 5,
                left: 5
            }
        }
    },
});