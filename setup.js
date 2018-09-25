const shell = require("shelljs")

const commands = [
    "npm install -g firebase-tools",
    "npm install -g react-scripts react-cli"
]

commands.forEach((command) => {
    shell.echo(`Running: ${command}`)
    shell.exec(command)
})