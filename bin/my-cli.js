const {commanderPart} = require('../utils/commander-part')
const {inquirerPart} = require('../utils/inquirer-part')
const path = require('path');
const fs = require('fs-extra');
var vfs = require('vinyl-fs');





async function init() {
    //commander部分，用户指定项目名
    const projectName = commanderPart();

    //创建相应文件夹
    fs.ensureDirSync(projectName);

    //inquirer部分,配置项目信息
    const inquirerInfo = await inquirerPart();
    console.log(inquirerInfo)
    let content = JSON.stringify(inquirerInfo);
    fs.writeJSON(path.join(projectName,'cli-config.json'),content)
    
    //框架代码部署
    const framework = inquirerInfo.framework;
    const cwd = path.join(__dirname, path.join('../template', framework));
    const dest = path.resolve(projectName);
    vfs.src(['**/*'], {
        cwd: cwd,
        dot: true
      })
      .pipe(vfs.dest(dest))
      .on('end', function () {
        console.log(`\nThe required ${framework} code framework has been successfully deployed !`);
      })
      .resume();
}

module.exports = {
    init
}


