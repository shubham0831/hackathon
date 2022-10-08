<script>
  import { onMount } from "svelte";
  import Chart from "chart.js";

  onMount(async () => {
    var ctx = document.getElementById(chartId);
    fetch("some api")
    .then(response => response.json)
    .then((received) => {
        chartData['labels'] = received.map((received) => received.bldg_name)
        chartData['dataset'] = received.map((received) => received.consumption)
        chartData['borderWidth'] = 2
        chartData['borderColor'] = "rgb(3,117,220)"
        chartData['backgroundColor'] = "rgba(3,117,220,0.2)"

        const chartOptions = {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
        };
        
        var myChart = new Chart(ctx, {
          type: "line",
          data: chartData,
          options: chartOptions
        });
      })   
  });
  

</script>

<canvas id="barChart" />
