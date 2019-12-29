// open-in-vim.js -- Vim as a regular application
//
// Take a list of files. Open them in Vim, in a new iTerm window.
// In Vim, change to the directory of the first file.

// The iTerm profile for the new window.
const profile = "Default";

function run(input, parameters) {
    const fileArgs =
        input.map(file => '"' + file + '"')
             .join(" ");
    const command =
        input.length !== 0
            ? `vim -c 'cd %:h' -- ${fileArgs}`
            : "vim";
    const iterm = new Application("iTerm");
    iterm.createWindowWithProfile(profile, {command: command});
}
