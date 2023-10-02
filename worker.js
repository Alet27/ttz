self.addEventListener('message', function(e) {
    var socket = new WebSocket('ws://localhost:3000/ws/ticker@arr'); 
    socket.addEventListener('message', function(event) {
      var data = JSON.parse(event.data);
      self.postMessage(data);
    });
  }, false);
