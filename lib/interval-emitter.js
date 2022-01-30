'use strict';

// events is a core Node module so this does not need
// to be installed from npm. https://nodejs.org/api/events.html
const EventEmitter = require('events');

function hasValidArgs(intervalMs, message) {
    let isFirstArgValid = false;
    let isSecondArgValid = false;

    if(Number.isInteger(intervalMs) && intervalMs > 0) {
        isFirstArgValid = true;
    }
    if(typeof message === "string") {
        isSecondArgValid = true;
    }

    return isFirstArgValid && isSecondArgValid;
}

class IntervalEmitter extends EventEmitter {
    constructor(intervalMs, message) {
        super();
        const validArgs = hasValidArgs(intervalMs, message);
        if(!validArgs) {
            const errorMessage = "Invalid arguments. First arg must be a positive integer and second arg must be a string";
            new Error(errorMessage);
        }
        this.intervalMs = intervalMs;
        this.message = message;
    }
    start() {
        const intervalEmitter = this;
        this.intervalId = setInterval(
            () => intervalEmitter.emit(intervalEmitter.message),
            intervalEmitter.intervalMs
        );
    }
    stop() {
        if(this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}

module.exports = IntervalEmitter;

// For TypeScript
module.exports.default = IntervalEmitter;
