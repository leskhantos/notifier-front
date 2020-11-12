<template>
  <div>
    <apexchart type="area" height="150" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
export default {
  name: "TemplateStatistics",
  data() {
    return {
      series: [
          {
        name: 'PUSH',
        data: [31, 40, 28, 51, 42, 109, 100]
      },    {
        name: 'PUSH+SMS',
        data: [22, 10, 20, 11, 66, 29, 19]
      }, {
        name: 'SMS',
        data: [11, 32, 45, 32, 34, 52, 41]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'area'
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'smooth'
        },
        xaxis: {
          type: 'datetime',
          categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
        },
        tooltip: {
          x: {
            format: 'dd/MM/yy HH:mm'
          },
        },
      }
    }

  }
}
</script>

<style scoped>

</style>