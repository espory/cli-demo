const {
    Command
} = require('commander');

function commanderPart() {
    const program = new Command();
    program
        .version('1.0.0')
        .option('-p, --projectName <string>', 'Name the project', 'ybw-project'); //添加一个姓名，默认值为 ybw-project
    program.parse(process.argv);

    const projectName = program.projectName;
    return projectName;
}

module.exports = {
    commanderPart
}