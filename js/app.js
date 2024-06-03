/* global $, Gamepad */

const gamepad = new Gamepad()

/*
 * Connection / Disconnection
 */

gamepad.on('connect', e => {
  console.log(`Controller ${e.index} connected!`)
  console.log(navigator.getGamepads()[e.index].id.toLowerCase().indexOf('xbox') !== -1) // it is an xbox controller
})

gamepad.on('disconnect', e => {
  console.log(`Controller ${e.index} disconnected!`)
})

/*
 * Button presses / releases
 */

const gamepadButtons = [
  'button_1', 'button_2', 'button_3', 'button_4',
  'shoulder_top_left', 'shoulder_top_right',
  'select', 'start', 'vendor',
  'd_pad_up', 'd_pad_down', 'd_pad_left', 'd_pad_right'
]

for (const button of gamepadButtons) {
  gamepad.on('press', button, e => {
    $('#img-controller-overlays').append(`<img id="${button}" src="${$('#helper-assets-path').html()}/xbox-one-s-wireless-controller-${button}.png" />`)
  })

  gamepad.on('release', button, e => {
    $('img').remove(`#${button}`)
  })
}

/*
 * Stick button presses / releases
 */

const gamepadStickButtons = ['stick_button_left', 'stick_button_right']

for (const button of gamepadStickButtons) {
  gamepad.on('press', button, e => {
    $('img').remove(`#stick_axis_${button.split('_').pop()}`)
    $('#img-controller-overlays').append(`<img id="${button}" src="${$('#helper-assets-path').html()}/xbox-one-s-wireless-controller-${button}.png" />`)
  })

  gamepad.on('release', button, e => {
    $('img').remove(`#${button}`)
    $('#img-controller-overlays').append(`<img id="stick_axis_${button.split('_').pop()}" src="${$('#helper-assets-path').html()}/xbox-one-s-wireless-controller-stick_axis_${button.split('_').pop()}.png" />`)
  })
}

/*
 * Stick movements
 */

const perspective = 500
const multiplierTranslation = $(window).width() / 40
const multiplierRotation = 30

const gamepadSticks = ['stick_axis_left', 'stick_axis_right']

for (const stick of gamepadSticks) {
  gamepad.on('hold', stick, e => {
    const transform = `perspective(${perspective}px) \
        translateX(${e.value[0] * multiplierTranslation}px) rotateX(${e.value[1] * -multiplierRotation}deg) \
        translateY(${e.value[1] * multiplierTranslation}px) rotateY(${e.value[0] * multiplierRotation}deg)`

    $(`#${stick}`).css('transform', transform)
    $(`#stick_button_${stick.split('_').pop()}`).css('transform', transform)
  })

  gamepad.on('release', stick, e => {
    $(`#${stick}`).css('transform', 'none')
    $(`#stick_button_${stick.split('_').pop()}`).css('transform', 'none')
  })
}
