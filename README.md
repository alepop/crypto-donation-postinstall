# Crypto Donation postinstall

Npm postinstall message to invite people to donate to you in cryptocurrencies

## Installation

```
npm install --save crypto-donation-postinstall
```

And in your `package.json` add:

```json
{
  ...
  "scripts": {
    "postinstall": "crypto-donation-postinstall"
  },
  "cryptoDonation": {
    "btc": "your btc address",
    "eth": "your eth address",
    ...
  }
  ...
}
```

## Disabling this message

In some places (e.g. CI) you may want to disable this output. You can do this by setting the environment variable `DISABLE_CRYPTO_DONATION=true`.

It will not be shown if npm's log level is set to silent (`--silent`), warn (`--quiet`), or error (`--loglevel error`).


This project is based on [opencollective-postinstall](https://github.com/opencollective/opencollective-postinstall) package.


