import signal
import sys

def finish_joke(num, frame):
    print("🐮 MOOOOO!")
    print("Program terminated...get it?")
    sys.exit(0)


signal.signal(signal.SIGTERM, finish_joke)
response = input("What does an interrupting cow say?  ")
print("Whoops to slow")
