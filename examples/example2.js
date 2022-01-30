const fastify = require('fastify')({ logger: true });
const IntervalEmitter = require('../lib/interval-emitter');

// If you are not running and example and have actually
// installed interval-emitter as a node module, do the require
// like this:
// const IntervalEmitter = require('interval-emitter');

async function run() {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.logerror(err);
        process.exit(1);
    }

    const myIntervalEmitter = new IntervalEmitter(1000, "time-to-do-something");

    myIntervalEmitter.start();

    const mySimpleQueue = ["apples", "oranges", "grapes", "peaches"];

    myIntervalEmitter.on('time-to-do-something', () => {
        // do whatever you want here
        if(mySimpleQueue.length === 0) {
            myIntervalEmitter.stop();
            console.log("Finished eating");
        } else {
            const typeOfFruit = mySimpleQueue.shift();
            if(typeOfFruit) {
                console.log("Eating ", typeOfFruit);
            }
        }
    });
}

run();
