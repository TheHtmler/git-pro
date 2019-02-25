$(function() {
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
    renderLevel(0)
    renderLevel(1)
})