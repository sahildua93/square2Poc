const system = require('system');
const casper = require('casper').create();

const output = {
    firstPage:null,
    secondPage:null,
    input: JSON.parse(casper.cli.args[0])
};

casper.start('http://casperjs.org/');

casper.then(function() {
    output.firstPage = this.getTitle();
});

casper.thenOpen('http://phantomjs.org', function() {
    output.secondPage = this.getTitle();
});

casper.then(function() {
    system.stdout.write(JSON.stringify(output, null, '\t'));
});

casper.run();