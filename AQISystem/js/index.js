$(function() {
    var outDoor = '室外'
    var inDoor = '室内'
    var t

    function renderLevel(index) {
        var pmValue = $('.pm-value .value').eq(index).text()
        if (pmValue >= 0 && pmValue <= 50) {
            $('.pm-status .level').eq(index).text('优')
            $('.pm-status .level').eq(index).css('background', '#64cb00')
        } else if (pmValue > 50 && pmValue <= 100) {
            $('.pm-status .level').eq(index).text('良')
            $('.pm-status .level').eq(index).css('background', '#efa705')
        } else if (pmValue > 100 && pmValue <= 150) {
            $('.pm-status .level').eq(index).text('轻度')
            $('.pm-status .level').eq(index).css('background', '#d66f00')
        } else if (pmValue > 150 && pmValue <= 200) {
            $('.pm-status .level').eq(index).text('中度')
            $('.pm-status .level').eq(index).css('background', '#df2d01')
        } else if (pmValue > 200 && pmValue <= 300) {
            $('.pm-status .level').eq(index).text('重度')
            $('.pm-status .level').eq(index).css('background', '#b32cbb')
        } else if (pmValue > 300) {
            $('.pm-status .level').eq(index).text('严重')
            $('.pm-status .level').eq(index).css('background', '#6f1774')
        }
    }

    function getData(id, loc) {
        $.ajax({
            url: 'http://47.104.3.171/ProcessDataCloud/customer/getAirQualityData?sensorid=' + id,
            method: 'GET',
            type: 'json',
            success: function(res) {
                updateDate = new Date()
                var weekDay = updateDate.getDay()
                var weekText = ''
                switch (weekDay) {
                    case 0:
                        weekText = "星期日";
                        break;
                    case 1:
                        weekText = "星期一";
                        break;
                    case 2:
                        weekText = "星期二";
                        break;
                    case 3:
                        weekText = "星期三";
                        break;
                    case 4:
                        weekText = "星期四";
                        break;
                    case 5:
                        weekText = "星期五";
                        break;
                    case 6:
                        weekText = "星期六";
                        break;
                }

                updateDate = updateDate.getFullYear() + '-' + (updateDate.getMonth() + 1 < 10 ? '0' + (updateDate.getMonth() + 1) : updateDate.getMonth() + 1) + '-' + (updateDate.getDate() < 10 ? '0' + updateDate.getDate() : updateDate.getDate()) + ' ' + (updateDate.getHours() < 10 ? '0' + updateDate.getHours() : updateDate.getHours()) + ':' + (updateDate.getMinutes() < 10 ? '0' + updateDate.getMinutes() : updateDate.getMinutes() + ' ' + weekText)
                $('.time').html("更新时间: " + updateDate)
                var resData = JSON.parse(res).data[0]
                if (loc == '室外') {
                    $('.pm-value .value').eq(0).text(Math.round(resData.pm25))
                    $('.temp .value').eq(0).text(Math.round(resData.temperature) + '℃')
                    $('.hd .value').eq(0).text(Math.round(resData.humidity) + '%')
                    renderLevel(0)
                } else if (loc == '室内') {
                    $('.pm-value .value').eq(1).text(Math.round(resData.pm25))
                    $('.temp .value').eq(1).text(Math.round(resData.temperature) + '℃')
                    $('.hd .value').eq(1).text(Math.round(resData.humidity) + '%')
                    $('.air-condition .value .val').text(resData.co2)
                    renderLevel(1)
                }
            },
            error: function(err) {
                console.log('数据获取失败!');
            }
        })
    }

    function getWeather(addr) {
        $.ajax({
            url: 'https://bird.ioliu.cn/weather?city=' + addr,
            method: 'GET',
            type: 'json',
            success: function(res) {
                var resData = JSON.parse(res).result
                console.log(resData)
                $('.air-condition .value').eq(0).text(resData.weather)
            },
            error: function(err) {
                console.log('数据获取失败!');
            }
        })
    }
    getData(121, outDoor)
    getData(123, inDoor)
    getWeather('北京')
        // clearInterval(t)
    t = setInterval(function() {
        getData(121, outDoor)
        getData(123, inDoor)
        getWeather('北京')
    }, 30 * 60 * 1000)
})