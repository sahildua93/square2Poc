const path = require('path');
const childProcess = require('child_process');
const casper = path.join(__dirname, './../node_modules/casperjs/bin/casperjs');

function run(runConfig, cb) {
    const args = [
        path.join(__dirname, '../scripts/createOrder.js')
    ];
    args.push(JSON.stringify(runConfig));

    childProcess.execFile(casper, args, {timeout: runConfig.timeout || 0}, function(outErr, stdout, stderr) {
        let output;
        try {
            output = JSON.parse(stdout);
        } catch (ex) {
            console.log('SOME_ERROR OCURRED');
            output: ex
        }
        const overallOutput = {
            err: outErr
            , output: output
            , stdout: stdout
            , stderr: stderr
        };
        cb(outErr, overallOutput);
    });
}

module.exports = {
    run
};