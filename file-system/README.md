# File Systems

## Terminal Commands

### List Files

#### *nix (Mac/Linux) Shells

```bash
# List files in the current directory
ls
```

#### Windows Shells

```powershell
# Lists 
dir
```

### Change Directories

```bash
# Goes up a directory
cd ..
```

```bash
# Directories are relative to your current location
# Move into the directory named photos
cd photos
```

_Important_ In *nix based terminals (Mac/Linux), a forward slash `/` separates directories. Windows uses a backslash `\`.

### Rename a File

```bash
# mv is short for move and allows you to rename a file (and move it to a new folder)
mv poorly-named-file.txt mv better.txt
```

### Make a copy

```bash
# cp is short for copy
cp myfile.txt myfile2.txt
```

## Practice

### From the GUI: Clean up your Downloads Folder

- Locate your Downloads folder
- Create a new Folder called `Older Files`
- Move any downloaded file that you no longer want into `Older Files`
- Delete files you no longer want

### From the Terminal: Remove that directory

- Change directories into `Downloads/Older Files`
- Remove a file using `rm`

## Learning Resources

- **TwilioQuest**: The first floor of the Tower of Infinite Knowledge in [TwilioQuest](https://twilio.com/quest?utm_source=gh&utm_medium=referral&utm_campaign=developer-fundamentals) focus on File Systems. Check it out this video even plays there on a VCR!
