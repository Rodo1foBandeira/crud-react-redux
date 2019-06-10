'use strict';
const  RMIClient = require('socket.io-rmi-client');
const io = require('socket.io-client');
 
// The EventHandler class must be extended from RMIClient.EventHandler
class EventHandler extends RMIClient.EventHandler {
  // The event methods should be prefixed with 'on'
  onEvent() {
 
  }
}
 
RMIClient.connect(io, 'rmi://localhost:8282/chat').onConnected = function (instance) {
  instance.setEventHandler(new EventHandler());
}