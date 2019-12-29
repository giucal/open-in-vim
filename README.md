# open-in-vim.js

This is a macOS automation script meant to be incorporated in an Automator
workflow or application. It opens the provided files inside Vim in a new
iTerm2 window.

It uses JXA (JavaScript for Automation), the equally obscure and badly
documented feature as AppleScript automation, except you don't have to
worry yourself with the problem of how the fuck AppleScript works in the
first place.

### How to use

  - Open Automator and choose to create an application.
  - Drag the the "Run JavaScript" action in the workflow.
  - Replace the existing boilerplate code with the script.
  - Save the application (as, say, "Vim").

The application can be launched, dragged on, and bound to file types.

### How to hack

If you're curious about how this script could be extended, open the
Script Editor app and have a look at the iTerm's "dictionary":

  - File > Open Dictionary...;
  - Choose iTerm.app;
  - Change the language from AppleScript to JavaScript in the upper menu.

To test this script:

    sh test.sh ...

Note that it takes absolute paths!
