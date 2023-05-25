import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

export default function (parent, config) {
    let { type, data, options, plugins } = config

    //makes chart scale vertically to remove whitespace
    if (options === undefined){
        options = {
            maintainAspectRatio: false
        }
    } else if (options.maintainAspectRatio === undefined){
        options.maintainAspectRatio = false;
    }

    const newChart = new Chart(
        parent,
        { type, data, options, plugins }
    )

    return newChart
}
