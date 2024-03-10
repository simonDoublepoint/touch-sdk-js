# Touch SDK Web

![npm](https://img.shields.io/npm/v/touch-sdk)
![npm bundle size](https://img.shields.io/bundlephobia/min/touch-sdk)
![NPM](https://img.shields.io/npm/l/touch-sdk)
![npm downloads](https://img.shields.io/npm/dm/touch-sdk)
![Discord](https://img.shields.io/discord/869474617729875998)

Connects to Doublepoint Touch SDK compatible Bluetooth devices – like [WowMouse app](https://play.google.com/store/apps/details?id=io.port6.watchbridge).

Works with Chrome-based browsers. ([more info](https://caniuse.com/?search=bluetooth))

## Quick-Start 



![Touch SDK Web Monitor - How to Connect](https://github.com/simonDoublepoint/touch-sdk-js/assets/103493347/070f6d01-00df-4cb6-aed0-e193d781b074)
[Open Live Example](https://playground.doublepoint.com/plot/examples/oscTouchSDK_monitor.html)
[Watch Intro Video](https://youtu.be/3sMWHl0PZDM)


# Touch SDK Web Monitor - Quick Guide

Easily integrate smartwatch IMU data and touch events into your projects with Touch SDK Web. This guide will help you set up your environment to start receiving data through WebBLE browsers and sending it via OSC to your favorite programs like MaxMSP or Touchdesigner.

## Features
- **OSC Bridge Included:** Seamlessly send data to any OSC-supported tool within your local network, opening new avenues for music, art performance, and interaction research without the need for coding expertise.

## Getting Started
**Live Demo:** Experience the capabilities by trying out our [OSC TouchSDK Monitor](https://playground.doublepoint.com/plot/examples/oscTouchSDK_monitor.html).

### Setup Your Watch
1. **Download WowMouse:** Get it for your wearOS watch from [Google Play](https://play.google.com/store/apps/details?id=io.port6.watchbridge).
2. **Activate TouchSDK Mode:** Navigate to `WowMouse > Settings > Turn on TouchSDK Mode`.

### Setup Your Desktop
1. **Get the SDK:** Download ZIP or clone the repo from [GitHub](https://github.com/simonDoublepoint/touch-sdk-js.git).
2. **Install Dependencies:** Open a terminal, navigate to the `touch-sdk-js` folder, and run `npm install`.
3. **Launch OSC Bridge:**
   - **Mac:** Open `touch-sdk-js/examples/oscTouchSDK_bridge.sh`.
   - **Windows:** Open `touch-sdk-js/examples/oscTouchSDK_bridge.bat`.
4. **Monitor Setup:** Open `touch-sdk-js/examples/oscTouchSDK_monitor.html` in Chrome.
5. **Connect Your Watch:** Press connect and select your watch.
6. **Configure Events:** Choose which events to send as OSC messages.
7. **Receive Data:** Open any OSC-supported application and receive the data stream at `localhost port: 5555`.

## Support
Questions? Join our [Discord](https://discord.doublepoint.com/) and ask in the #QnA or #support-touchsdk channels.

## Learn More
- [About OSC](https://controlmedia.art/more-on-osc/)
- [TouchSDK & WowMouse Documentation](https://docs.doublepoint.com/)


# Touch SDK Web

## Importing (URL)

```html
<script src="https://cdn.jsdelivr.net/npm/touch-sdk@0.5.2/dist/main.js"></script>
```

```javascript
const Watch = TouchSDK.Watch
```

## Importing (NPM)
```sh
npm install touch-sdk
```

```javascript
import { Watch } from 'touch-sdk'
```

## Example using URL import

```javascript
<!DOCTYPE html>
<html>
    <head>
        <script src="https://cdn.jsdelivr.net/npm/touch-sdk@0.5.2/dist/main.js"></script>
    </head>
    <body>
        <script>
            const watch = new TouchSDK.Watch()

            const connectButton = watch.createConnectButton()
            document.body.appendChild(connectButton)

            watch.addEventListener('tap', () => {
                console.log('tap')
            })
        </script>
    </body>
</html>
```

## Reference

### Connection

#### `watch.createConnectButton`

Returns a button element with the following properties:
- `onclick` calls `watch.requestConnection`
- Text: Connect Touch SDK Controller
- Class (for CSS): `touch-sdk-connect-button`
- When the user selects a Touch SDK compatible device, the button is hidden.
- When the watch disconnects, the button is shown again.

This function does not add the button to the DOM.

#### `watch.requestConnection`
Can only be called as a result of a user action, for example a button click. Otherwise doesn't do anything.

```javascript
watch.requestConnection().then(() => {
    console.log('connected')
}, error => {
    alert(error.message)
})
```

### Input events

#### Gesture prediction

```javascript
watch.addEventListener('tap', (event) => {
    console.log('tap')
})
```

#### Ray casting (arm direction)
```javascript
watch.addEventListener('armdirectionchanged', event => {
    const { dx, dy } = event.detail
    console.log(dx, dy)
})
```

#### Raw motion (IMU)

All applicable units are SI-based.

##### Acceleration
```javascript
watch.addEventListener('accelerationchanged', (event) => {
    const { x, y, z } = event.detail
    console.log(x, y, z)
})
```

##### Rotation (gyroscope)
```javascript
watch.addEventListener('angularvelocitychanged', (event) => {
    const { x, y, z } = event.detail
    console.log(x, y, z)
})
```

##### Gravity Vector
```javascript
watch.addEventListener('gravityvectorchanged', (event) => {
    const { x, y, z } = event.detail
    console.log(x, y, z)
})
```

##### Orientation (quaternion)
```javascript
watch.addEventListener('orientationchanged', (event) => {
    const { x, y, z, w } = event.detail
    console.log(x, y, z, w)
})
```

#### Touch Screen

##### Touch Start
```javascript
watch.addEventListener('touchstart', (event) => {
    const { x, y } = event.detail
    console.log(x, y)
})
```

##### Touch Move
```javascript
watch.addEventListener('touchmove', (event) => {
    const { x, y } = event.detail
    console.log(x, y)
})
```

##### Touch End
```javascript
watch.addEventListener('touchend', (event) => {
    const { x, y } = event.detail
    console.log(x, y)
})
```

##### Touch Cancel
For example the user swiped from the edge of the screen, and triggered an operating system gesture. Usually `touchcancel` should be handled the same way as `touchend`.
```javascript
watch.addEventListener('touchcancel', (event) => {
    const { x, y } = event.detail
    console.log(x, y)
})
```

#### Mechanical

##### Rotary Dial
```javascript
watch.addEventListener('rotary', (event) => {
    const { step } = event.detail
    console.log(step)
})
```

##### Button
In Wear OS this is the back button. Only clicks are registered, no button down and button up events.
```javascript
watch.addEventListener('button', (event) => {
    console.log('button')
})
```

### Output
#### Haptics
Intensity is between 0 and 1.
Length is milliseconds, between 0 and 5000.
```javascript
watch.triggerHaptics(intensity, length)
```

## Developing: build a new version
```
npm install
npm run build
npm publish
```
