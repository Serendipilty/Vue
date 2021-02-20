var t = null;
t = setTimeout(time, 1000); // 开始运行
function time() {
  clearTimeout(t); //清除定时器
  dt = new Date();
  var y = dt.getFullYear();
  var mt = dt.getMonth() + 1;
  mt = mt < 10 ? "0" + mt : mt;
  var day = dt.getDate();
  day = day < 10 ? "0" + day : day;
  var h = dt.getHours();
  h = h < 10 ? "0" + h : h;
  var m = dt.getMinutes();
  m = m < 10 ? "0" + m : m;
  var s = dt.getSeconds();
  s = s < 10 ? "0" + s : s;
  document.querySelector(".showTime").innerHTML =
    y + "-" + mt + "-" + day + "    " + h + "-" + m + "-" + s;
  t = setTimeout(time, 1000);
}

(function () {
  var myChart = echarts.init(document.querySelector(".state-right-fpy"));
  var data = [
    {
      name: "",
      value: 45,
    },
  ];
  var option = {
    series: (function () {
      var result = [];
      data.forEach(function (item) {
        result.push(
          {
            name: "背景圈",
            type: "gauge",
            radius: "100%",
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "RGBa(38, 50, 73,1)",
                      },
                    ]),
                  ],
                ],
                width: 12,
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },

            detail: {
              show: true,
              offsetCenter: [0, "34%"],
              textStyle: {
                fontSize: 12,
                color: "rgba(255,255,255,1)",
              },
              formatter: function () {
                return "FPY";
              },
            },
          },
          {
            name: item.name,
            type: "gauge",
            radius: "100%",
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 12,
                color: [
                  [
                    item.value / 100,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(18,124,245,1)",
                      },
                      {
                        offset: 1,
                        color: "rgba(11,73,147,1)",
                      },
                    ]),
                  ],
                ],
              },
            },

            splitLine: {
              show: 0,
            },
            axisTick: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, "-6%"],
              formatter: function (params) {
                return item.value + "%";
              },
              textStyle: {
                fontSize: 12,
                color: "rgba(255,255,255,1)",
              },
            },
            data: [
              {
                value: item.value,
              },
            ],
          }
        );
      });
      return result;
    })(),
  };
  myChart.setOption(option);
})();

(function () {
  var myChart = echarts.init(document.querySelector(".state-right-uph"));
  var data = [
    {
      name: "",
      value: 98.6,
    },
  ];
  var option = {
    series: (function () {
      var result = [];
      data.forEach(function (item) {
        result.push(
          {
            name: "背景圈",
            type: "gauge",
            radius: "100%",
            startAngle: 220,
            endAngle: -40,
            axisLine: {
              lineStyle: {
                color: [
                  [
                    1,
                    new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                      {
                        offset: 0,
                        color: "RGBa(38, 50, 73,1)",
                      },
                    ]),
                  ],
                ],
                width: 12,
              },
            },
            splitLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            axisLabel: {
              show: false,
            },
            pointer: {
              show: false,
            },

            detail: {
              show: true,
              offsetCenter: [0, "34%"],
              textStyle: {
                fontSize: 12,
                color: "rgba(255,255,255,1)",
              },
              formatter: function () {
                return "UPH";
              },
            },
          },
          {
            name: item.name,
            type: "gauge",
            radius: "100%",
            startAngle: 220,
            endAngle: -40,
            min: 0,
            max: 100,
            axisLine: {
              show: true,
              lineStyle: {
                width: 12,
                color: [
                  [
                    item.value / 100,
                    new echarts.graphic.LinearGradient(0, 1, 1, 0, [
                      {
                        offset: 0,
                        color: "rgba(18,124,245,1)",
                      },
                      {
                        offset: 1,
                        color: "rgba(11,73,147,1)",
                      },
                    ]),
                  ],
                ],
              },
            },

            splitLine: {
              show: 0,
            },
            axisTick: {
              show: 0,
            },
            axisLabel: {
              show: 0,
            },
            pointer: {
              show: false,
            },
            detail: {
              show: true,
              offsetCenter: [0, "-6%"],
              formatter: function (params) {
                return item.value + "%";
              },
              textStyle: {
                fontSize: 12,
                color: "rgba(255,255,255,1)",
              },
            },
            data: [
              {
                value: item.value,
              },
            ],
          }
        );
      });
      return result;
    })(),
  };
  myChart.setOption(option);
})();

(function () {
  var myChart = echarts.init(document.querySelector(".bar .chart"));
  var data = {
    name: [
      "CLO1",
      "CLO3",
      "LO2",
      "LO3",
      "LO5",
      "LO7",
      "LO9",
      "L22",
      "L23",
      "SLO1",
    ],
    num1: [
      98,
      94,
      30,
      180,
      268,
      350,
      482,
      360,
      375,
      300,
      320,
      140,
      192,
      110,
      124,
      68,
      86,
    ],
    num2: [
      97,
      92,
      28,
      176,
      256,
      342,
      488,
      390,
      380,
      310,
      324,
      170,
      168,
      89,
      145,
      68,
      88,
    ],
  };

  var option = {
    grid: {
      left: "2%",
      right: "2%",
      bottom: "2%",
      top: "16%",
      containLabel: true,
    },

    xAxis: [
      {
        type: "category",
        data: data.name,
        axisTick: {
          show: false,
        },
        axisLine: {
          lineStyle: {
            color: "#65abe7",
            opacity: 0.2,
          },
        },
        axisLabel: {
          textStyle: {
            color: "#65abe7",
            fontStyle: 700,
            fontSize: 14,
          },
          rotate: 50,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: [
      {
        type: "value",
        splitNumber: 5,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisLabel: {
          textStyle: {
            color: "#65abe7",
            fontStyle: "700",
            fontSize: 10,
          },
        },
        splitLine: {
          show: true,
          lineStyle: {
            color: ["#0f2a42"],
            opacity: 1,
          },
        },
      },
    ],
    series: [
      {
        name: "",
        type: "bar",
        data: data.num1,
        barWidth: 10,
        barGap: 0,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#41e8d3",
              },
              {
                offset: 1,
                color: "#86f8d9",
              },
            ]),
          },
        },
      },
      {
        name: "",
        type: "bar",
        data: data.num2,
        barWidth: 10,
        barGap: 0,
        itemStyle: {
          normal: {
            show: true,
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
              {
                offset: 0,
                color: "#597eef",
              },
              {
                offset: 1,
                color: "#3d66ea",
              },
            ]),
          },
        },
      },
    ],
  };
  myChart.setOption(option);
})();

(function () {
  var myChart = echarts.init(document.querySelector(".bar1 .chart"));
  var data = [
    {
      name: "设备1",
      value: 100,
    },
    {
      name: "设备1",
      value: 90,
    },
    {
      name: "设备1",
      value: 85,
    },
    {
      name: "设备1",
      value: 80,
    },
    {
      name: "设备1",
      value: 75,
    },
    {
      name: "设备1",
      value: 65,
    },
    {
      name: "设备1",
      value: 60,
    },
    {
      name: "设备1",
      value: 55,
    },
  ];

  var option = {
    grid: {
      top: "14%",
      left: "4%",
      right: "16%",
      bottom: "8%",
      containLabel: true,
    },
    tooltip: {
      trigger: "axis",
      axisPointer: {
        type: "shadow",
      },
      textStyle: {
        color: "#6e7079",
      },
      backgroundColor: "#fff",

      formatter: function (params) {
        var res =
          "<div style='text-align: center;'>" +
          params[0].name +
          "</div>" +
          "<span style='display:inline-block;margin-right:5px;border-radius:10px;width:9px;height:9px;background-color:rgba(20,122,241,0.9)'></span>移动率 " +
          "<span style='margin-left:10px;font-size:15px;font-weight: 600;'>" +
          params[0].value +
          "</span>";

        return res;
      },
    },

    xAxis: [
      {
        type: "value",
        min: 0,
        axisLabel: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
        splitLine: {
          show: false,
        },
      },
    ],
    yAxis: {
      type: "category",
      position: "left",
      inverse: true,
      axisLabel: {
        textStyle: {
          color: "#5d9fd9",
          fontSize: 10,
          fontWeight: 700,
        },
      },
      axisLine: {
        show: false,
      },
      axisTick: {
        show: false,
      },
      splitLine: {
        show: false,
      },
      data: (function (data) {
        var arr = [];
        data.forEach(function (items) {
          arr.push(items.name);
        });
        return arr;
      })(data),
    },
    series: [
      {
        type: "bar",
        label: {
          normal: {
            show: true,
            position: "right",
            textStyle: {
              color: "#65abe7",
              fontSize: 14,
              fontWeight: 700,
            },
            formatter: "{c}" + "%",
          },
        },
        barWidth: 14,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [
              {
                offset: 0,
                color: "#157af1",
              },
              {
                offset: 1,
                color: "#00c5f1",
              },
            ]),
          },
        },
        data: data, // 载入数据(内含自定义参数)
      },
    ],
  };

  myChart.setOption(option);
})();

(function () {
  var myChart = echarts.init(document.querySelector(".bar2 .chart"));
  var option = {
    grid: {
      top: "18%",
      bottom: "2%",
      left: "4%",
      right: "6%",
      containLabel: true,
    },
    legend: {
      left: "right",
      top: "6%",
      textStyle: {
        color: "#0a9ef3",
        fontSize: 12,
      },
    },
    xAxis: {
      data: [
        "4-11",
        "4-12",
        "4-11",
        "4-12",
        "4-11",
        "4-12",
        "4-11",
        "4-12",
        "4-11",
        "4-12",
      ],
      axisTick: {
        show: false,
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: "#657ca8",
        },
      },

      axisLabel: {
        show: true,
        margin: 10,
        fontSize: 14,
        textStyle: {
          color: "#4073a1",
        },
      },
    },
    yAxis: [
      {
        type: "value",
        gridIndex: 0,
        axisTick: {
          show: false,
        },
        axisLine: {
          show: false,
        },
        splitLine: {
          show: false,
        },

        axisLabel: {
          show: true,
          fontSize: 14,
          textStyle: {
            color: "#4073a1",
          },
        },
      },
    ],
    series: [
      {
        name: "UPH",
        type: "bar",
        barWidth: 20,
        itemStyle: {
          normal: {
            color: "#0a9ef3",
          },
        },
        data: [2000, 1800, 1780, 3000, 4200, 3200, 2100, 1400, 1300, 3100],
        z: 10,
        zlevel: 0,
      },
      {
        // 分隔
        type: "pictorialBar",
        itemStyle: {
          normal: {
            color: "#001027",
          },
        },
        width: 20,
        symbolRepeat: "fixed",
        symbolMargin: 3,
        symbol: "rect",
        symbolClip: true,
        symbolSize: [20, 4],
        symbolPosition: "start",
        symbolOffset: [0, 0],
        data: [2000, 1800, 1780, 3000, 4200, 3200, 2100, 1400, 1300, 3100],

        z: 0,
        zlevel: 1,
      },
      {
        name: "周转率",
        type: "line",
        smooth: false,
        showAllSymbol: false,
        symbolSize: 14,
        itemStyle: {
          color: "#da525a",
          borderColor: "#da525a",
          borderWidth: 3,
        },
        lineStyle: {
          color: "#da525a",
          width: 3,
        },

        data: [2000, 1800, 1780, 3000, 4200, 3200, 2100, 1400, 1300, 3100],
        z: 0,
        zlevel: 1,
      },
    ],
  };
  myChart.setOption(option);
})();
