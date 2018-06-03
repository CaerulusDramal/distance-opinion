$(function () {
  console.log('hello')

  var imgCode = window.location.hash.substr(1)

  console.log(imgCode)

  var srcBackground = 'https://i.imgur.com/' + imgCode.split('-')[0] + '.png'
  var srcA = 'https://i.imgur.com/' + imgCode.split('-')[1] + '.png'

  var heightA = 0
  var zoom = 50

  var makeImage = function (id, src) {
    return $(new Image()).attr('id', id).attr('src', src)
  }

  var start = function () {
    var backgroundA = makeImage('backgroundA', srcBackground)
    var objA = makeImage('objA', srcA)

    $('#layout').append(objA,backgroundA)

    backgroundA.css('top', 0).css('left', 20)
    // backgroundB.css('top', 100).css('left', 1000)

    objA.css('top', 767).css('left', 360).css('transform', 'translate(0%, -50%)').css('width', heightA * 10).css('height', 74 + (((heightA * 10) - 1000) * (0.035)))
    // objBA.css('top', 533).css('left', 303).css('transform', 'translate(-58%, -16%)').css('height', heightBA)
    // objBB.css('top', 533).css('left', 1103).css('transform', 'translate(-58%, -16%)').css('height', heightBB)
    // objC.css('top', 510).css('left', 1091).css('transform', 'translate(-79%, -78%)').css('height', heightC)
  }

  var adjust = function () {
    var a = $('#inputA').val() * 10
    var scale = $('#inputZ').val()

    // transform: scale(0.8);

    $('#layout').css('transform', 'scale(' + (scale / 100) + ')')
    $('#objA').css('height', 74 + ((a - 1000) * (0.035)) )
    $('#objA').css('width', a)


    $('#current').text('Current Code: ' + $('#inputA').val() + '-v2')
  }

  $('#inputA').val(heightA).on('change', adjust)
  $('#inputZ').val(zoom).on('change', adjust)

  adjust()

  start()
})
