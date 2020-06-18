document.onload=set();
function set(){ 
      var json = JSON.parse(sessionStorage.getItem("covid"));
  if(json==null)
    location.reload();
var ctx = document.getElementById('myChart1').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
        labels: ['New Confirmed Cases', 'Total Confirmed Cases', 'New Deaths', 'Total Deaths', 'New Recovered', 'Total Recovered'],
        datasets: [{
            label: 'Global Cases',
            data: [json.Global.NewConfirmed, json.Global.TotalConfirmed, json.Global.NewDeaths, json.Global.TotalDeaths, json.Global.NewRecovered, json.Global.TotalRecovered],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}



  

