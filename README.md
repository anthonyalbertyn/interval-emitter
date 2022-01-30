# interval-emitter

MIT License, see LICENSE for more details

## Uses case

Emit a specified event at a specified interval. See /examples for some use cases.

## Getting started

`npm install interval-emitter`

## Using interval-emitter

`
const { IntervalEmitter } = require('interval-emitter');

const myIntervalEmitter = new IntervalEmitter(1000, "my-event");

myIntervalEmitter.start();

myIntervalEmitter.on('my-event', () => {
    console.log("Hello");
});
`
To stop the emitter in your code
`
myIntervalEmitter.stop();
`
You can create more than one IntervalEmitter in your code.

## Limitations

IntervalEmitter does not emit arguments, just an event

## Maintainers

There is currently only one maintainer, Anthony Albertyn, and the plan is to keep this module simple, light-weight and not add more features unless there are good reasons to do so.