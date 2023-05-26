import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

let currentChart = null

export default function (parent, configSrc) {
  const config = addDefaults(configSrc)
  createChart(parent,config)
}

function addDefaults(config){
  const newConfig = {...config}
  newConfig.type = 'scatter'

  if (newConfig.options === undefined) {
    newConfig.options = {
      maintainAspectRatio: false
    }
  } else if (newConfig.options.maintainAspectRatio === undefined) {
    newConfig.options.maintainAspectRatio = false;
  }

  return newConfig
}

function createChart(parent,config){
  if (currentChart) {
    currentChart.destroy()
  }

  currentChart = new Chart(
    parent,
    config
  )
}