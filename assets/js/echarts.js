$(function(e){
  'use strict'
  /*-----echart2-----*/

  var chartdata = [
    {
      
        name: 'sales',
        type: 'line',
      smooth: true,
      pointShape: { type: 'triangle', rotation: 180 },
        data: [10, 65, 89, 93, 109, 120],
      color:[ 'rgb(138,207,87)']
      },
      {
        name: 'Profit',
        type: 'line',
      smooth: true,
      pointstyle:'triangle',
      size:10,
        data: [0,58,16,78,98,108,119],
      color:[ 'rgb(253,136,81)']
      }
  ];

  var chart = document.getElementById('echart1');
  var barChart = echarts.init(chart);

  var option = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    
	tooltip: {
		show: true,
		showContent: true,
		alwaysShowContent: true,
		triggerOn: 'mousemove',
		trigger: 'axis',
		axisPointer:
		{
			label: {
				show: false,
			}
		}

	},
  xAxis: {
    data: [ 'Category', 'Category', 'Category', 'Category'],
    axisLine: {
      lineStyle: {
        color: 'rgb(0,0,0)'
      }
    },
    axisLabel: {
      fontSize: 10,
      color: 'rgb(0,0,0)'
    }
  },
  yAxis: {
    // data:['0,20,40,60,80,100,120'],
    splitLine: {
      lineStyle: {
        color: 'rgb(67, 87, 133, .09)'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgb(0,0,0)'
      }
    },
    axisLabel: {
      fontSize: 10,
      color: 'rgb(0,0,0)'
    }
  },
    series: chartdata,
    color:[ '#2d66f7','rgb(138,207,87)', '#cedbfd',]
  };

  barChart.setOption(option);


  /*-----echart1-----*/
  var chartdata2 = [
    {
      name: 'sales',
      type: 'line',
	  smooth: true,
      data: [20, 45, 69, 100, 106, 115],
	  color:[ 'rgb(138,207,87)']
    },
    {
      name: 'Profit',
      type: 'line',
	  smooth: true,
	  size:10,
      data: [0,58,16,78,98,108,119],
	  color:[ 'rgb(253,136,81)']
    }
  ];

  var chart2 = document.getElementById('echart2');
  var barChart2 = echarts.init(chart2);

  var option2 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    tooltip: {
      show: true,
      showContent: true,
      alwaysShowContent: true,
      triggerOn: 'mousemove',
      trigger: 'axis',
      axisPointer:
      {
        label: {
          show: false,
        }
      }
  
    },
    xAxis: {
      data: [ 'Category', 'Category', 'Category', 'Category'],
      axisLine: { 
        lineStyle: {
          color: 'rgb(0,0,0)'
          
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgb(0,0,0)'
      }
    },
    yAxis: {
      // data:['0,20,40,60,80,100,120'],
      splitLine: {
        lineStyle: {
          color: 'rgb(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgb(0,0,0)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: 'rgb(0,0,0)'
      }
    },
    series: chartdata2,
    color:[ '#2d66f7','rgb(138,207,87)', '#cedbfd',]

  };
  barChart2.setOption(option2);
 /*-----echart10-----*/
 var chartdata10 = [
  {
    name: 'sales',
    type: 'line',
  smooth: true,
    data: [20, 45, 69, 100, 106, 115],
  color:[ 'rgb(138,207,87)']
  },
  {
    name: 'Profit',
    type: 'line',
  smooth: true,
  size:10,
    data: [0,58,16,78,98,108,119],
  color:[ 'rgb(253,136,81)']
  }
];

var chart10= document.getElementById('echart10');
var barChart10 = echarts.init(chart10);

var option10 = {
  grid: {
    top: '6',
    right: '0',
    bottom: '17',
    left: '25',
  },
  tooltip: {
    show: true,
    showContent: true,
    alwaysShowContent: true,
    triggerOn: 'mousemove',
    trigger: 'axis',
    axisPointer:
    {
      label: {
        show: false,
      }
    }

  },
  xAxis: {
    data: [ 'Category', 'Category', 'Category', 'Category'],
    axisLine: {
      lineStyle: {
        color: 'rgb(0,0,0)'
      }
    },
    axisLabel: {
      fontSize: 10,
      color: 'rgb(0,0,0)'
    }
  },
  yAxis: {
    // data:['0,20,40,60,80,100,120'],
    splitLine: {
      lineStyle: {
        color: 'rgb(67, 87, 133, .09)'
      }
    },
    axisLine: {
      lineStyle: {
        color: 'rgb(0,0,0)'
      }
    },
    axisLabel: {
      fontSize: 10,
      color: 'rgb(0,0,0)'
    }
  },
  series: chartdata10,
  color:[ '#2d66f7','rgb(138,207,87)', '#cedbfd',]

};
barChart10.setOption(option10);




  /*-----echart3-----*/

  var option3 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      type: 'category',
      data: [ '2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#c0dfd8'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata,
	color:[ '#2d66f7','#f72d66', '#cedbfd',]
	};

  var chart3 = document.getElementById('echart3');
  var barChart3 = echarts.init(chart3);
  barChart3.setOption(option3);


  /*-----echart4-----*/

  var option4 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '32',
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      type: 'category',
      data: [ '2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata2,
    color:[ '#2d66f7', '#cedbfd','#ecb403']
  };

  var chart4 = document.getElementById('echart4');
  var barChart4 = echarts.init(chart4);
  barChart4.setOption(option4);


  /*-----echart5-----*/

  var chartdata3 = [
    {
      name: 'sales',
      type: 'bar',
      stack: 'Stack',
      data: [14, 18, 20, 14, 29, 21, 25, 14, 24]
    },
    {
      name: 'Profit',
      type: 'bar',
      stack: 'Stack',
      data: [12, 14, 15, 50, 24, 24, 10, 20 ,30]
    }
  ];

  var option5 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata3,
	color:[ '#2d66f7', '#cedbfd']
  };

  var chart5 = document.getElementById('echart5');
  var barChart5 = echarts.init(chart5);
  barChart5.setOption(option5);


  /*-----echart6-----*/

  var option6 = {
    grid: {
      top: '6',
      right: '10',
      bottom: '17',
      left: '32',
    },
    xAxis: {
      type: 'value',
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      type: 'category',
       data: ['2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata3,
	color:[ '#2d66f7', '#cedbfd']
  };

  var chart6 = document.getElementById('echart6');
  var barChart6 = echarts.init(chart6);
  barChart6.setOption(option6);


  /*-----echart7-----*/

  var chartdata4 = [
    {
      name: 'data',
      type: 'line',
      data: [20, 20, 36, 18, 15, 20, 25, 20]
    }
  ];

  var option7 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata4,
	color:[ '#2d66f7']
  };

  var chart7 = document.getElementById('echart7');
  var lineChart = echarts.init(chart7);
  lineChart.setOption(option7);


  /*-----echart8-----*/
  var chartdata5 = [
    {
      name: 'data',
      type: 'line',
      smooth: true,
      data: [20, 20, 36, 18, 15, 20, 25, 20]
    }
  ];

  var option8 = {
    grid: {
      top: '6',
      right: '0',
      bottom: '17',
      left: '25',
    },
    xAxis: {
      data: [ '2011', '2012', '2013', '2014', '2015', '2016','2017', '2018'],
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    yAxis: {
      splitLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(67, 87, 133, .09)'
        }
      },
      axisLabel: {
        fontSize: 10,
        color: '#8e9cad'
      }
    },
    series: chartdata5,
    color:[ '#f72d66']
  };

  var chart8 = document.getElementById('echart8');
  var lineChart2 = echarts.init(chart8);
  lineChart2.setOption(option8);

});