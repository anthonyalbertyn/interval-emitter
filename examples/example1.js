const fastify = require('fastify')({ logger: true });
const IntervalEmitter = require('../lib/interval-emitter');

// If you are not running and example and have actually
// installed interval-emitter as a node module, do the require
// like this:
// const IntervalEmitter = require('@anthonyalbertyn/interval-emitter');

async function run() {
    try {
        await fastify.listen(3000);
    } catch (err) {
        fastify.logerror(err);
        process.exit(1);
    }

    const myIntervalEmitter = new IntervalEmitter(1000, "time-to-do-something");

    myIntervalEmitter.start();

    myIntervalEmitter.on('time-to-do-something', () => {
        console.log("Hello ", Date.now());
    });

}

run();
