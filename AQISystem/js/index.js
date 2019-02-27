$(function() {
    var outDoor = '室外'
    var inDoor = '室内'

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
                $('.air-condition .value').eq(1).text(resData.weather)
            },
            error: function(err) {
                console.log('数据获取失败!');
            }
        })
    }

    getData(121, outDoor)
    getData(123, inDoor)
    getWeather('北京')
})