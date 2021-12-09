<template>
  <div class="main">
    <el-card class="column">
      <img src="https://i.gtimg.cn/club/item/face/img/2/16022_100.gif" />
      <div class="content">
        <p>admin</p>
        <div class="text">
          新增动态表格、任务管理、动态锚点、自定义打印、锁屏功能。Plus累计完成6种布局、9种主题。支持无分栏布局。
        </div>
      </div>
    </el-card>

    <el-row :gutter="20" class="chart">
      <el-col :span="6">
        <el-card>
          <div class="chart-header">
            <i class="el-icon-data-line"></i>访问量
          </div>
          <div class="chart-body" id="visits"></div>
          <div class="chart-footer">日均访问量: 45,986</div>
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card>
          <div class="chart-header">
            <i class="el-icon-data-analysis"></i>授权量
          </div>
          <div class="chart-body" id="empower"></div>
          <div class="chart-footer">授权数: 5,031</div>
        </el-card>
      </el-col>
      <el-col :span="12">
        <el-card>
          <div class="chart-header">
            <i class="el-icon-warning-outline"></i>信息
          </div>
          <el-descriptions :column="2" size="small" border>
            <el-descriptions-item label="vue" labelClassName="label-style"
              >^2.6.14</el-descriptions-item
            >
            <el-descriptions-item label="@vue/cli" labelClassName="label-style"
              >^3.6.2</el-descriptions-item
            >
            <el-descriptions-item label="vuex" labelClassName="label-style"
              >^2.6.14</el-descriptions-item
            >
            <el-descriptions-item
              label="vue-router"
              labelClassName="label-style"
              >^3.5.3</el-descriptions-item
            >
            <el-descriptions-item
              label="element-ui"
              labelClassName="label-style"
              >^2.15.6</el-descriptions-item
            >
            <el-descriptions-item label="axios" labelClassName="label-style"
              >^0.24.0</el-descriptions-item
            >
            <el-descriptions-item label="授权渠道" labelClassName="label-style"
              ><el-tag type="" effect="light"
                >开源</el-tag
              ></el-descriptions-item
            >
          </el-descriptions>
        </el-card>
      </el-col>
    </el-row>

    <el-row :gutter="20" class="chart">
      <el-col :span="12">
        <el-card>
          <div class="chart-header"><i class="el-icon-data-line"></i>地图</div>
          <div class="chart-container" id="map"></div>
        </el-card>
      </el-col>
      <el-col :span="12"><el-card></el-card></el-col>
    </el-row>
  </div>
</template>

<script>
import * as echarts from "echarts";

export default {
  data() {
    return {};
  },
  mounted() {
    this.drawEcharts();
  },
  methods: {
    drawEcharts() {
      var visitsChart = echarts.init(document.getElementById("visits"));
      var visitsOption = {
        grid: {
          top: "14%",
          left: "12%",
          right: "8%",
          bottom: "20%",
        },
        tooltip: {
          show: true,
        },

        xAxis: [
          {
            type: "category",
            boundaryGap: false,
            axisLabel: {
              textStyle: {
                color: "#7f7f7f",
              },
            },
            axisLine: {
              show: false,
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
              },
            },
            data: ["1月", "2月", "3月", "4月", "5月", "6月"],
          },
        ],
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#7f7f7f",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
              },
            },
          },
        ],
        series: [
          {
            type: "line",
            symbol: "circle",
            symbolSize: 8,
            itemStyle: {
              normal: {
                color: "#0092f6",
                lineStyle: {
                  color: "#0092f6",
                },
                areaStyle: {
                  color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [
                    {
                      offset: 0,
                      color: "rgba(7,44,90,0.3)",
                    },
                    {
                      offset: 1,
                      color: "rgba(0,146,246,0.9)",
                    },
                  ]),
                },
              },
            },
            data: [134, 230, 210, 182, 234, 330],
          },
        ],
      };
      visitsChart.setOption(visitsOption);

      var empowerChart = echarts.init(document.getElementById("empower"));
      var empowerOption = {
        grid: {
          top: "14%",
          left: "12%",
          right: "8%",
          bottom: "20%",
        },
        tooltip: {
          show: true,
        },
        xAxis: {
          type: "category",
          axisLabel: {
            textStyle: {
              color: "#7f7f7f",
            },
          },
          axisLine: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: "#ddd",
            },
          },
          data: ["10时", "11时", "12时", "13时", "14时", "15时"],
        },
        yAxis: [
          {
            type: "value",
            axisLabel: {
              textStyle: {
                color: "#7f7f7f",
              },
            },
            axisLine: {
              lineStyle: {
                color: "#ddd",
              },
            },
            axisTick: {
              show: false,
            },
            splitLine: {
              show: true,
              lineStyle: {
                color: "#ddd",
              },
            },
          },
        ],
        series: [
          {
            name: "授权量",
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [
                  {
                    offset: 0,
                    color: "#00FFE3",
                  },
                  {
                    offset: 1,
                    color: "#4693EC",
                  },
                ]),
              },
            },
            data: [42, 38, 48, 35, 29, 28],
          },
        ],
      };
      empowerChart.setOption(empowerOption);

      var mapChart = echarts.init(document.getElementById("map"));
      var mapOption = {
        title: {
          text: "中国大区分布图",

          textStyle: {
            color: "#1a1b4e",

            fontStyle: "normal",

            fontWeight: "bold",

            fontSize: 20,
          },
        },

        visualMap: {
          min: 0,
          max: 100,
          left: "left",
          top: "bottom",
          text: ["高", "低"],
          calculable: true,
          inRange: {
            color: [
              "#ffffff",
              "#E0DAFF",
              "#ADBFFF",
              "#9CB4FF",
              "#6A9DFF",
              "#3889FF",
            ],
          },
        },

        geo: {
          map: "china",
          label: {
            normal: {
              show: true,
              color: "#c1c4c8",
            },
            emphasis: {
              show: false,
              color: "#292929",
            },
          },
          roam: true,
          itemStyle: {
            normal: {
              areaColor: "#fbfbfb",
              borderColor: "#b9b4b7",
            },
            emphasis: {
              areaColor: "#f8bc06",
            },
          },
        },
        series: [
          {
            type: "map",
            mapType: "china",
            geoIndex: 0,
            label: {
              normal: {
                show: true,
              },
              emphasis: {
                show: true,
              },
            },
            data: [
              {
                name: "北京",
                value: 100,
              },
              {
                name: "天津",
                value: 60,
              },
              {
                name: "上海",
                value: 40,
              },
              {
                name: "重庆",
                value: 30,
              },
              {
                name: "河北",
                value: 80,
              },
              {
                name: "河南",
                value: 23,
              },
              {
                name: "云南",
                value: 80,
              },
              {
                name: "辽宁",
                value: 5,
              },
              {
                name: "黑龙江",
                value: 26,
              },
              {
                name: "湖南",
                value: 12,
              },
              {
                name: "安徽",
                value: 23,
              },
              {
                name: "山东",
                value: 54,
              },
              {
                name: "新疆",
                value: 23,
              },
              {
                name: "江苏",
                value: 53,
              },
              {
                name: "浙江",
                value: 86,
              },
              {
                name: "江西",
                value: 48,
              },
              {
                name: "湖北",
                value: 65,
              },
              {
                name: "广西",
                value: 32,
              },
              {
                name: "甘肃",
                value: 21,
              },
              {
                name: "山西",
                value: 30,
              },
              {
                name: "内蒙古",
                value: 18,
              },
              {
                name: "陕西",
                value: 23,
              },
              {
                name: "吉林",
                value: 6,
              },
              {
                name: "福建",
                value: 80,
              },
              {
                name: "贵州",
                value: 36,
              },
              {
                name: "广东",
                value: 85,
              },
              {
                name: "青海",
                value: 48,
              },
              {
                name: "西藏",
                value: 52,
              },
              {
                name: "四川",
                value: 53,
              },
              {
                name: "宁夏",
                value: 43,
              },
              {
                name: "海南",
                value: 96,
              },
              {
                name: "台湾",
                value: 89,
              },
              {
                name: "香港",
                value: 78,
              },
              {
                name: "澳门",
                value: 86,
              },
              {
                name: "南海诸岛",
                value: 98,
              },
            ],
          },
        ],
      };
      mapChart.setOption(mapOption);
    },
  },
};
</script>

<style>
.main {
  padding: 0 20px;
}

.column .el-card__body {
  display: flex;
  align-items: center;
}

.column .el-card__body img {
  height: 60px;
  width: 60px;
  border-radius: 50%;
}

.content {
  padding-left: 20px;
}

.content p {
  margin-bottom: 12px;
  font-size: 20px;
  font-weight: 700;
  color: #3c4a54;
}

.text {
  font-size: 14px;
  color: #808695;
}

.chart {
  margin: 20px 0;
}
.chart .el-card__body {
  padding: 0;
}

.chart-header {
  padding: 14px;
  border-bottom: 1px solid #ebeef5;
  color: #626b7d;
}

.chart-header i {
  margin-right: 6px;
}

.chart-body {
  height: 150px;
}

.chart-footer {
  margin: 0 14px;
  padding: 10px 0;
  border-top: 1px solid #dcdfe6;
  color: #595959;
  font-size: 14px;
}

.el-descriptions {
  height: 190px;
  padding: 10px 20px;
}

.label-style {
  width: 150px;
  font-size: 14px !important;
  color: #666 !important;
  text-align: right !important;
}

.chart-container {
  height: 190px;
}
</style>