
function country(){
  var concode=document.getElementById("country").value;
      
        var json = JSON.parse(sessionStorage.getItem("covid"));
        var i=0;
        do{
          if(json.Countries[i].CountryCode==concode)
          {var ctx = document.getElementById('myChart2').getContext("2d");
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['New Confirmed Cases', 'Total Confirmed Cases', 'New Deaths', 'Total Deaths', 'New Recovered', 'Total Recovered'],
        datasets: [{
            label: '# of Cases in '+json.Countries[i].Country,
            data: [json.Countries[i].NewConfirmed, json.Countries[i].TotalConfirmed, json.Countries[i].NewDeaths, json.Countries[i].TotalDeaths, json.Countries[i].NewRecovered, json.Countries[i].TotalRecovered],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 0, 0, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(255, 0, 0, 1)',
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
break;}
          i++;
        }while(1);
      }




