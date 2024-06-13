google.charts.load('current', {'packages':['corechart']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var orderedPizzas = JSON.parse(localStorage.getItem('orderedPizzas'));

    // Create a new DataTable and add columns
    var data = new google.visualization.DataTable();
    data.addColumn('string', 'Title');
    data.addColumn('number', 'Amount');

    // Add rows for each ordered pizza
    orderedPizzas.forEach(function(pizza) {
        data.addRow([pizza.title, pizza.amount]);
    });

    // Set chart options
    var options = {
        'title': 'Pizza chart',
        'width': 400,
        'height': 300
    };

    // Instantiate and draw the chart
    var chart = new google.visualization.PizzaCharts(document.getElementById('chart_div'));
    chart.draw(data, options);
}