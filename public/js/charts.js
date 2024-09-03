const room1Data = document.querySelectorAll('g.highcharts-series.highcharts-series-0');
const room2Data = document.querySelectorAll('g.highcharts-series.highcharts-series-1');
const room3Data = document.querySelectorAll('g.highcharts-series.highcharts-series-2');
const room1Legend = document.querySelectorAll('g.highcharts-legend-item.highcharts-spline-series.highcharts-color-0.highcharts-series-0')
const room2Legend = document.querySelectorAll('g.highcharts-legend-item.highcharts-spline-series.highcharts-color-1.highcharts-series-1')
const room3Legend = document.querySelectorAll('g.highcharts-legend-item.highcharts-spline-series.highcharts-color-2.highcharts-series-2')
const co2Chart = document.getElementById('co2-chart')
const tmpChart = document.getElementById('tmp-chart')
const humChart = document.getElementById('hum-chart')
const voctChart = document.getElementById('voct-chart')
const roomFilter = document.getElementById('room-filter')
const paramsFilter = document.getElementById('params-filter')

roomFilter.addEventListener('change', (event) => {
  if (roomFilter.value === 'Salle B2') {
    room1Data.forEach(chart => {
      chart.setAttribute('visibility', '')
    })
    room2Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room3Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room1Legend.forEach(legend => {
      legend.classList.remove('d-none')
    })
    room2Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
    room3Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
  } else if (roomFilter.value === 'Salle 8A') {
    room1Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room2Data.forEach(chart => {
      chart.setAttribute('visibility', '')
    })
    room3Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room1Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
    room2Legend.forEach(legend => {
      legend.classList.remove('d-none')
    })
    room3Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
  } else if (roomFilter.value === 'Salle 8F') {
    room1Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room2Data.forEach(chart => {
      chart.setAttribute('visibility', 'hidden')
    })
    room3Data.forEach(chart => {
      chart.setAttribute('visibility', '')
    })
    room1Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
    room2Legend.forEach(legend => {
      legend.classList.add('d-none')
    })
    room3Legend.forEach(legend => {
      legend.classList.remove('d-none')
    })
  } else {
    showAllRooms()
  }
})

paramsFilter.addEventListener('change', (event) => {
  if (paramsFilter.value === 'CO2') {
    co2Chart.classList.remove('d-none')
    tmpChart.classList.add('d-none')
    humChart.classList.add('d-none')
    voctChart.classList.add('d-none')
  } else if (paramsFilter.value === 'TMP') {
    co2Chart.classList.add('d-none')
    tmpChart.classList.remove('d-none')
    humChart.classList.add('d-none')
    voctChart.classList.add('d-none')
  } else if (paramsFilter.value === 'HUM') {
    co2Chart.classList.add('d-none')
    tmpChart.classList.add('d-none')
    humChart.classList.remove('d-none')
    voctChart.classList.add('d-none')
  } else if (paramsFilter.value === 'VOCT') {
    co2Chart.classList.add('d-none')
    tmpChart.classList.add('d-none')
    humChart.classList.add('d-none')
    voctChart.classList.remove('d-none')
  } else {
    showAllParams()
  }
})

function showAllRooms() {
  room1Data.forEach(chart => {
    chart.setAttribute('visibility', '')
  })
  room2Data.forEach(chart => {
    chart.setAttribute('visibility', '')
  })
  room3Data.forEach(chart => {
    chart.setAttribute('visibility', '')
  })
  room1Legend.forEach(legend => {
    legend.classList.remove('d-none')
  })
  room2Legend.forEach(legend => {
    legend.classList.remove('d-none')
  })
  room3Legend.forEach(legend => {
    legend.classList.remove('d-none')
  })
}

function showAllParams() {
  co2Chart.classList.remove('d-none')
  tmpChart.classList.remove('d-none')
  humChart.classList.remove('d-none')
  voctChart.classList.remove('d-none')
}
