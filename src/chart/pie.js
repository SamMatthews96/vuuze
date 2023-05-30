
import Chart from 'chart.js/auto';
import { set } from 'lodash';

export default function (config) {
  let { data, label, value } = config;
  // Get labels from 1st dataset
  const labels = data.map(e => e[label])
  const values = data.map(e => e[value])

  const bindTo = document.getElementById('app');
  const ans = {
    type: 'pie',
    data: {
      datasets: [{
        data: values
      }],
      labels
    },
    options: {}
  }

  return new Chart(bindTo, ans);
}