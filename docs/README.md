**[alertifii-js](README.md)**

> [Globals](globals.md)

# alertifii-js v1.3.0

A Node JS module written in Typescript to use with Alertifii notifications app

---

## Breaking changes from v0.x.x

This entire library has been rewritten to be based on promises.

The code has been restructured, and the methods changed to make it more complete and versatile.

If you were using a version of the 0.x.x branch, please check the documentation to adapt your code.

---

## Installation

```bash
npm install --save alertifii-js
```

---

## Documentation

Please read the complete documentation in the [docs](docs/globals.md) folder

## Usage

### Promises

```javascript
/*
        JAVASCRIPT
*/

// Load the module
var Alertifii = require( 'alertifii-js').Alertifii;

// Instance
const alertifii = new Alertifii('user', 'token')

// Simple notification (without personalization)
alertifii
    .send('My title', 'My message')
        .then(console.log)
        .catch(console.error)

// Custom notification
alertifii
    // Setting the sound
    .setSound('cashregister')
    // If the priority is 2, you have to provide an expire time and a retry time (see the official API for more info)
    .setPriority(2, 60, 30)
    // Set an url to access on tap
    .setUrl('https://www.github.com/pagertree/alertifii-js', 'Alertifii-JS github')
    // Set custom timestamp (must to be unix timestamp, not javascript time!!!)
    .setTimestamp(Math.floor(new Date(2020, 2, 1).getTime() / 1000))
    // Add a file
    .setAttachment('image.jpg', 'path/to/your/file.jpg')
    // Mark message as html
    .setHtml()
    // Send
    .send('Submit an issue', 'Click on the link to submit an issue')
  .then((msj) => {
    console.log(msj)
  })
  .catch((e) => {
    console.error(e)
  })
```

```typescript
/*
        TYPESCRIPT
*/

// Load the module
import { Alertifii } from 'alertifii-js'

// Instance
const alertifii = new Alertifii('user', 'token')

// Simple notification (without personalization)
alertifii
    .send('My title', 'My message')
        .then(console.log)
        .catch(console.error)

// Custom notification
alertifii
    // Setting the sound
    .setSound('cashregister')
    // If the priority is 2, you have to provide an expire time and a retry time (see the official API for more info)
    .setPriority(2, 60, 30)
    // Set an url to access on tap
    .setUrl('https://www.github.com/pagertree/alertifii-js', 'Alertifii-JS github')
    // Set custom timestamp (must to be unix timestamp, not javascript time!!!)
    .setTimestamp(Math.floor(new Date(2020, 2, 1).getTime() / 1000))
    // Add a file
    .setAttachment('image.jpg', 'path/to/your/file.jpg')
    // Mark message as html
    .setHtml()
    // Send
    .send('Submit an issue', 'Click on the link to submit an issue')
  .then((msj) => {
    console.log(msj)
  })
  .catch((e) => {
    console.error(e)
  })
```

### Async/await

```typescript
// Load the module
import { Alertifii } from 'alertifii-js'

// Use this inside an async function
const sendNotification = async () => {
    // Instance
    const alertifii = new Alertifii('user', 'token')

    // Custom notification
    alertifii
        // Setting the sound
        .setSound('cashregister')
        // If the priority is 2, you have to provide an expire time and a retry time (see the official API for more info)
        .setPriority(2, 60, 30)
        // Add a file
        .setAttachment('image.jpg', 'path/to/your/file.jpg')
        // Set an url to access on tap
        .setUrl('https://www.github.com/pagertree/alertifii-js', 'Alertifii-JS github')

    try {
        const response = await alertifii.send('Submit an issue', 'Click on the link to submit an issue')
        console.log(response)
    } catch (error) {
        console.error(error)
    }
}

```

For any suggestion or issue, please go to the [issues section](https://github.com/pagertree/alertifii-js/issues) on the [Github repository](https://github.com/pagertree/alertifii-js)
