$('body').terminal({
    help: function() {
        this.echo('All current commands are:\n\nhelp: Shows all the commands.' +
            '\ndir: Show all files in the current directory.' +
            '\ncls: Clears the console.' +
            '\ncredits: Shows the credits of CreativeOS&copy;.' +
            '\n');
    },
    dir: function() {
        this.echo('Coming soon!');
    },
    cls: function() {
        this.clear();
    },
    credits: function() {
        this.echo('CreativeOS&copy; credits:\n\n' +
            'Original Creator: Retr0A');
    }
}, {
    login: false,
    greetings: 'Welcome to CreativeOS&copy; 1.0!',
    name: 'CreativeTerminal',
    prompt: 'Disk->',
});