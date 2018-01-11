/* global $, Gamepad */

const gamepad = new Gamepad()

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

const gamepadStickButtons = [ 'stick_button_left', 'stick_button_right' ]

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

gamepad.on('connect', e => {
  console.log(`Controller ${e.index} connected!`)
  console.log(navigator.getGamepads()[e.index].id.toLowerCase().indexOf('xbox') !== -1) // it is an xbox controller
})

gamepad.on('disconnect', e => {
  console.log(`Controller ${e.index} disconnected!`)
})

gamepad.on('hold', 'stick_button_left', e => {
  console.log(`stick_button_left has a value of ${e.value}!`)
})

gamepad.on('hold', 'stick_axis_left', e => {
  console.log(`stick_axis_left has a value of ${e.value}!`)
})
