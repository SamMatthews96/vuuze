import Chart from 'chart.js/auto';
import { set } from 'lodash';


/**
 * @todo check stacked, it doesn't work
 * @todo should we wrap dataset if it's singular?
 * @todo figure our if we really need setting maintainAspectRatio
 * @todo add multiple y-axis support
 * @todo add tooltip support
 */

export default function (config) {
  let { data, parameters = {} } = config;
  // Get labels from 1st dataset
  const labels = Object.keys(Object.values(data)?.[0].dataset ?? []);
  const groups = Object.keys(data);

  const datasets = [];
  Object.values(data).forEach((data, index) => {
    const dataset = {
      type: 'bar',
      label: groups[index],
      data: data.dataset,
      //yAxisID: `y${index}`,
      borderWidth: 1,
    }

    data?.color && (dataset.backgroundColor = data.color);

    datasets.push(dataset);
  });

  const options = {
    responsive: false,
    maintainAspectRatio: false,
    plugins: {
      // tooltip: {
      //     callbacks: {
      //         label: function(context) {
      //             let label = context.dataset.label || '';
      //
      //             if (label) {
      //                 label += ': ';
      //             }
      //
      //             if (context.parsed.y !== null && context.datasetIndex === 0) {
      //                 label += new Intl.NumberFormat('en-US', {
      //                     style: 'currency',
      //                     currency: 'USD'
      //                 }).format(context.parsed.y);
      //             } else {
      //                 label += context.parsed.y;
      //             }
      //
      //             return label;
      //         }
      //     }
      // }
    }
  };

  // parameters?.stacked && set(options, 'scales.y.stacked', true) && set(options, 'scales.x.stacked', true);
  // parameters?.title && set(options, 'plugins.title', { display: true, text: parameters.title });

  const bindTo = document.getElementById('app');
  const ans = {
    type: 'scatter',
    data: {
      labels,
      datasets
    },
    options
  }

  return new Chart(bindTo, ans);
}