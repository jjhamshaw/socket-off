'use strict';

var gpio = require('rpi-gpio');

// The GPIO pins for the Energenie module
// var BIT1 = 11,
//     BIT2 = 15,
//     BIT3 = 16,
//     BIT4 = 13;

var channels = [11, 15, 16, 13],
    ON_OFF_KEY = 18,
    ENABLE = 22;

var controller = {
  init: init,
  switchOff: switchOff,
  switchOn: switchOn
};

function init() {
  // set mode
  gpio.setup(channels[0], gpio.DIR_OUT);
  gpio.setup(channels[1], gpio.DIR_OUT);
  gpio.setup(channels[2], gpio.DIR_OUT);
  gpio.setup(channels[3], gpio.DIR_OUT);

  gpio.setup(ON_OFF_KEY, gpio.DIR_OUT);
  gpio.setup(ENABLE, gpio.DIR_OUT);

  gpio.output(channels[0], false);
  gpio.output(channels[1], false);
  gpio.output(channels[2], false);
  gpio.output(channels[3], false);
}

function switchOn(channel, bool) {
  gpio.write(channel, bool, function(err) {
    if (err) { 
      console.log(err);
      throw err; }
    console.log('turned on pin ' + channel);
  });
}

function switchOff () {
  // todo
}

module.exports = controller;