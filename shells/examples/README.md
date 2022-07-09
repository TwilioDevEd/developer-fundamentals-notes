## Shell Wordle Example 

### On a POSIX based shell

- Visit [the gist](https://gist.github.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513)
- Click the [Raw button](https://gist.githubusercontent.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513/raw/ca41929c10a6c2ed8faa77c298bb188abfe5145a/wordle.sh) of wordle.sh
- Grab that URL and use [cURL](https://curl.se/) to get it and pipe it to a file on your machine.

`curl https://gist.githubusercontent.com/huytd/6a1a6a7b34a0d0abcac00b47e3d01513/raw/ca41929c10a6c2ed8faa77c298bb188abfe5145a/wordle.sh > wordle.sh`

- Allow it to be executable

`chmod u+x wordle.sh`

- Play Wordle!

`./wordle.sh`


## Twilio CLI

- Install the [Twilio CLI](https://twil.io)
- Log into your account
  
`twilio login`

- Buy a number
- Set the environment variable to your Twilio number (Replace the 555 number with your purchased number)

`export TWILIO_NUMBER=+15552223333`

- Send me a message!

`twilio api:core:messages:create --from=$TWILIO_NUMBER --to=+15037513879 --body="I sent this message from my shell" --properties=status,to` 