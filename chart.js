/**
 * Created by zhangwanshu on 2017/5/12.
 */

//js 轻量级内存数据库 lokijs  https://github.com/techfort/LokiJS/wiki/Query-Examples
    // 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));

var jfquery = jF("*[name=bid.gateway_time]",sample_data).get(0);
var name = jfquery["name"];
var metric = jfquery["metric"];

var bucket = jF("> metric :first > histogram > bucket > upper_bound",jfquery).get();
var values = jF("> metric :first > histogram > bucket > cumulative_count",jfquery).get();

var histogram_names = jF("*[type=4] > name",sample_data).get();
console.log(histogram_names);
console.log(jF("*[name="+histogram_names[0]+"] > metric > histogram > bucket",sample_data).get());
console.log(jF("*[name="+histogram_names[0]+"] > metric > label",sample_data).get());

// 指定图表的配置项和数据
var option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: [name]
    },
    xAxis: {
        data: bucket
    },
    yAxis: {},
    series: [{
        name: name,
        type: 'bar',
        data: values
    }]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);

/*
 var metric = TAFFY(sample_data);
 var filter = metric({name: "bid.request"}).limit(2);
 filter.each(function (r) {
 alert(r.name + r.help)
 });
 console.log(filter.get());
 var histogram_filted = metric({type: 4, name: "bid.gateway_time"});
 var metric_h = histogram_filted.select("metric");
 var metric_name = histogram_filted.select("name");
 console.log(metric_name);
 console.log(metric_h);
 */

var Food = {
    fruits: [{name: "Banana", color: "Yellow"}, {name: "Apple", color: "Red"}, {
        name: "Grapefruit",
        color: "Orange"
    }, {name: "Kiwi", color: "Green"}],
    vegetables: [{name: "Carrot", color: "Orange"}, {name: "Turnip", color: "Purple"}, {
        name: "Rutabaga",
        color: "Yellow"
    }, {name: "Sweet Potato", color: "Orange"}, {nama: "Sweet Potato", coloor: "Orange"}]
};
var jfq = jF("*[color=Orange]", Food).get();
console.log(jfq);

var sample = [
    {
        "name": "bid.gateway_time",
        "help": "the histogram of gateway process time",
        "type": 4,
        "metric": [
            {
                "label": [
                    {
                        "name": "ad_traffic_type",
                        "value": "52"
                    },
                    {
                        "name": "ad_type",
                        "value": "1"
                    },
                    {
                        "name": "business_type",
                        "value": "4"
                    },
                    {
                        "name": "match_type",
                        "value": "1"
                    },
                    {
                        "name": "op_type",
                        "value": "1"
                    }
                ],
                "histogram": {
                    "sample_count": 4,
                    "sample_sum": 215,
                    "sample_max": 90,
                    "sample_min": 0,
                    "sample_avg": 53.75,
                    "bucket": [
                        {
                            "cumulative_count": 0,
                            "upper_bound": 1
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 5
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 10
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 20
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 25
                        },
                        {
                            "cumulative_count": 1,
                            "upper_bound": 30
                        },
                        {
                            "cumulative_count": 1,
                            "upper_bound": 40
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 50
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 60
                        },
                        {
                            "cumulative_count": 2,
                            "upper_bound": 100
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 150
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 200
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 1000
                        }
                    ]
                }
            },
            {
                "label": [
                    {
                        "name": "ad_traffic_type",
                        "value": "52"
                    },
                    {
                        "name": "ad_type",
                        "value": "1"
                    },
                    {
                        "name": "business_type",
                        "value": "4"
                    },
                    {
                        "name": "match_type",
                        "value": "2"
                    },
                    {
                        "name": "op_type",
                        "value": "2"
                    }
                ],
                "histogram": {
                    "sample_count": 107,
                    "sample_sum": 2378,
                    "sample_max": 35,
                    "sample_min": 0,
                    "sample_avg": 22.22429906542056,
                    "bucket": [
                        {
                            "cumulative_count": 0,
                            "upper_bound": 1
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 5
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 10
                        },
                        {
                            "cumulative_count": 16,
                            "upper_bound": 20
                        },
                        {
                            "cumulative_count": 73,
                            "upper_bound": 25
                        },
                        {
                            "cumulative_count": 11,
                            "upper_bound": 30
                        },
                        {
                            "cumulative_count": 7,
                            "upper_bound": 40
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 50
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 60
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 100
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 150
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": 200
                        },
                        {
                            "cumulative_count": 0,
                            "upper_bound": null
                        }
                    ]
                }
            }
        ]
    }
    ];
//var query = jF("*[value=52]", sample);
var query = jF("*[name=bid.gateway_time]", sample);
//var query = jF(" > metric > histogram > bucket > upper_bound", sample_data);
var query_r = query.get();
console.log(query_r);
console.log(jF("*[name]",sample).get());