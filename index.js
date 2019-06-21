#!/usr/bin/env node

function isTrue(value) {
  return !!value && value !== "0" && value !== "false"
};

function fillColAlign(data) {
  return data.map(function(_) { return 'middle';})
};

var path = require('path');
var Table = require('cli-table');
var qrcode = require('qrcode-terminal');


var logLevel = process.env.npm_config_loglevel;
var logLevelDisplay = ['silent', 'error', 'warn'].indexOf(logLevel) > -1;
var envDisable = isTrue(process.env.CI) || isTrue(process.env.DISABLE_CRYPTO_DONATION);


if (!logLevelDisplay && !envDisable) {
    var pkg = require(path.resolve('./package.json'));
    var cryptoDonation = pkg.cryptoDonation;
    if (!cryptoDonation) return;
    var table;
    var head = [];
    var data = Object.keys(cryptoDonation);

    console.log(`\u001b[96m\u001b[1mThank you for using "${pkg.name}"!\u001b[96m\u001b[1m 🎉`);
    console.log(`\u001b[0m\u001b[96mIf you rely on this package, please consider supporting the author\u001b[22m\u001b[39m`);
    data.forEach(function(el) {
        var address = cryptoDonation[el];
        qrcode.generate(address, { small: true }, (qrcode) => {
            head.push(`${el.toUpperCase()}:${address}\n${qrcode}`);
        })
    });
    table = new Table({ head: head, style: { head: []}, colAligns: fillColAlign(data) });
    console.log(table.toString())
}

