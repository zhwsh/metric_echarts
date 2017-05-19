/**
 * Created by shu on 2017/5/14.
 */

//多个维度下的分布sum聚合
function histogram_sum(buncket_arr) {
    var rnt = [];
    for (var i = 0; i < buncket_arr.length; i++) {
        var sum = 0;
        for (var j = 0; j < buncket_arr[i].length; j++) {
            if (typeof rnt[j] == "undefined") {
                rnt[j] = buncket_arr[i][j].cumulative_count;
            } else {
                rnt[j] += buncket_arr[i][j].cumulative_count;
            }
        }
    }
    return rnt;
}

function counter_sum(counter_arr) {

}
function get_data(processs) {
    $.ajax({
        url: "http://bdsp.x.jd.com/mt/?format=jsonp&ip=10.190.5.10&callback=?",
        dataType: "jsonp",
        jsonp: "callback",
        crossDomain: true,
        success: processs,
        error: function (XMLHttpRequest, msg, errorThrown) {
            console.log(msg);
        }


    });
    /*
     var dd = $.getScript("http://bdsp.x.jd.com/mt/?format=jsonp&ip=10.190.5.10",function(data) {
     console.log(data);
     }
     );
     console.log(dd);
     */
}
