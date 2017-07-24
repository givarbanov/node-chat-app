var socket = io();
socket.on('connect', function () {
  console.log('Connected to server');
});
socket.on('disconnect', function () {
  console.log('Disconnected from server');
});

socket.on('newMessage', function (message) {
  console.log('newMessage', message);
});

socket.emit('createMessage', {
  from: 'John',
  text: 'Some text'
}, function (data) {
  console.log('Got it! ', data);
});
