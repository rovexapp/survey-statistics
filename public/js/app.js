document.addEventListener('DOMContentLoaded', function () {
  fetch('/data')
    .then(response => response.json())
    .then(data => {
      const labels = data.map(item => item.question);
      const values = data.map(item => item.responses);

      const ctx = document.getElementById('surveyChart').getContext('2d');
      const surveyChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: labels,
          datasets: [{
            label: 'Survey Responses',
            data: values,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1
          }]
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
      });
    })
    .catch(error => console.error('Error fetching data:', error));
});
