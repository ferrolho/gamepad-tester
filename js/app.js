const gamepad = new Gamepad();

gamepad.on('press', 'button_1', e => {
    console.log(`${e.button} was pressed!`);
    $('#img-controller').attr('src', `${$('#helper-assets-path').html()}/xbox-one-s-wireless-controller-a.png`)
});

gamepad.on('release', 'button_1', e => {
    console.log(`${e.button} was pressed!`);
    $('#img-controller').attr('src', `${$('#helper-assets-path').html()}/xbox-one-s-wireless-controller.png`)
});
