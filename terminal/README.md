# Terminal

[![Watch the Terminal video on TwilioDevs YouTube channel](https://img.youtube.com/vi/lZ7Kix9bjPI/maxresdefault.jpg)](https://youtu.be/lZ7Kix9bjPI)

## Opening your default Terminal

### Mac

On a Mac you can find the Terminal application using Spotlight `Cmd` + `Space` and type `terminal`.

### Linux

Press `Ctrl` + `Alt` + `t`

### Windows

Click search and type `terminal`. Choose the `Windows Terminal` option. If you don't see it, you can [download it from the Microsoft store](https://apps.microsoft.com/store/detail/windows-terminal/9N0DX20HK701). If you are running an older version, you can still open the command prompt (AKA the old Terminal) by using `Start > Run > cmd`.


## Practice

What do you think the following command will do?

```bash
echo "hi mom"
```

Can you output your name to the command line?

### Text to Speech

Making your computer output is pretty fun, but did you know you could make it actually *talk*?! 🗣

The technology has gotten a lot better, in the early days it had a really hard time saying cheeseburger. It'd be like `chezz eh bur grrrr`.

#### Mac

```bash
say "this is for text to speech, cheeseburger"
```

#### Windows PowerShell

```PowerShell
Add-Type -AssemblyName System.speech
$speak = New-Object System.Speech.Synthesis.SpeechSynthesizer
$speak.Speak('Cheeseburger')
```

#### Linux

```bash
espeak "Check this out. Cheeseburger"
```

---

Pass this to your text to speech engine. What does it sound like it says?

```
"eye ham not a hah qur, eye ham lure ning sum duh vehlop urrr fun da mint alls fur uhm my furr ends at twill e oh"
```

---

Try to find a word that your text-to-speech engine has a hard time pronouncing. Can you make it work by phonetically spelling things out? Hint new slang seems to always stump this.

