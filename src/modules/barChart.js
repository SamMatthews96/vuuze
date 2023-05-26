import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

let currentChart = null

export default function (configSrc) {
  const canvas = getCanvas()
  const config = addDefaults(configSrc)
  createChart(canvas,config)
}

function getCanvas(){
  const currentApp = document.getElementById('app')
  if (currentApp && currentApp.tagName === 'CANVAS'){
    return currentApp
  }

  const body = document.getElementsByTagName('body')[0]
  if (!body){
    throw new Error('Body element not found')
  }

  const container = document.createElement('div')
  container.setAttribute('id','container')
  const canvas = document.createElement('canvas')
  canvas.setAttribute('id','app')

  body.appendChild(container)
  container.appendChild(canvas)

  return canvas
}

function addDefaults(config){
  if (!config.data){
    throw new Error('Data is not defined')
  }
  const newConfig = structuredClone(config)
  newConfig.type = 'scatter'

  if (!newConfig.options) {
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

class BarChart {
  

  static instance(){

  }

  constructor(config){

  }
}