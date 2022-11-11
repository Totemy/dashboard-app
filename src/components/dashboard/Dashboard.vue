<template>
  <div class="container">
    <canvas id="test-chart"></canvas>
  </div>
</template>
<script>
import Chart from "chart.js/auto";
export default {
  mounted() {
    var ctx = document.getElementById("test-chart");
    var myChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: [
          "Red",
          "Blue",
          "Yellow",
          "Green",
          "Purple",
          "Orange",
          "1",
          "2",
          "3"
        ],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3, 5, 6, 7],
            backgroundColor: ["rgba(255, 159, 64, 0.2)"],
            borderColor: ["rgba(255, 159, 64, 1)"],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
    myChart;
  }
};
</script>
