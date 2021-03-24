const config = require('./config.json');
const Socket = require('ws');

let WebSocket = new Object(null)

if (config.enableWebsocket) {
    function heartbeat() {
        clearTimeout(this.pingTimeout);
      
        this.pingTimeout = setTimeout(() => {
          this.terminate();
        }, 30000 + 1000);
      }

      WebSocket = new Socket(`${config.websocketAddress}`);

      WebSocket.on('open', heartbeat);
      WebSocket.on('ping', heartbeat);
      WebSocket.on('message', () => {

      });
      WebSocket.on('close', function clear() {
        clearTimeout(this.pingTimeout);
      });
}


module.exports = WebSocket;