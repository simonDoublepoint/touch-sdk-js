const OSC = require('osc-js');
const config = { udpClient: { port: 5555 } };
const osc = new OSC({ plugin: new OSC.BridgePlugin(config) });
console.log(`\x1b[33mBridge is running on \x1b[43m\x1b[30mport ${config.udpClient.port}\x1b[0m\x1b[33m. Make sure to reload the client webpage to connect to the bridge. You can now receive OSC messages.\x1b[0m`);
console.log('\x1b[33mPress Ctrl+C to stop the bridge.\x1b[0m');

osc.on('/tap', (message) => {
  console.log(`tap: ${message.args}`);
});

osc.on('/back', (message) => {
  console.log(`back button: ${message.args}`);
});

osc.on('/rotary', (message) => {
  console.log(`rotary: ${message.args}`);
});

osc.on('/status', (message) => {
  console.log(`Connection Status: ${message.args}`);
});

osc.on('/arm', (message) => {
  console.log(`Arm Direction: ${message.args}`);
});

osc.on('/acc', (message) => {
  console.log(`Acceleration: ${message.args}`);
});

osc.on('/angVel', (message) => {
  console.log(`Angular Velocity: ${message.args}`);
});

osc.on('/grav', (message) => {
  console.log(`Gravity Vector: ${message.args}`);
});

osc.on('/ori', (message) => {
  console.log(`Orientation: ${message.args}`);
});

osc.on('/touch', (message) => {
  console.log(`Touch Start: ${message.args}`);
});

osc.on('/touchend', (message) => {
  console.log(`Touch End: ${message.args}`);
});

osc.on('/touchmove', (message) => {
  console.log(`Touch Move: ${message.args}`);
});

osc.on('/touchcancel', (message) => {
  console.log(`Touch Cancel: ${message.args}`);
});

osc.on('/prob', (message) => {
  console.log(`Probability: ${message.args}`);
});

osc.open();

process.on('SIGINT', () => {
  process.exit(0);
});

process.on('SIGTERM', () => {
  process.exit(0);
});
