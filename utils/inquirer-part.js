const inquirer = require('inquirer')
async function inquirerPart(){
    const { framework } = await inquirer.prompt([
        {
          type: 'list',
          name: 'framework',
          message: `Select the framework you need :`,
          choices: [
            { name: 'egg', value: 'egg' },
            { name: 'aplus-server', value: 'aplus-server' },
          ]
        }
      ])
      const { redisUse } = await inquirer.prompt([
        {
          type: 'confirm',
          name: 'redisUse',
          message: "Whether to turn on Redis :",
          default:false
        }
      ])
      console.log('database configuration ：')
      const { database } = await inquirer.prompt([
        {
          type: 'list',
          name: 'database',
          message: `Select the kind of database you want to use :`,
          choices: [
            { name: 'MySQL', value: 'MySQL' },
            { name: 'SQL Server', value: 'SQL Server' },
            { name: 'MongoDB', value: 'MongoDB' },
          ]
        }
      ])
      
      const { database_port } = await inquirer.prompt([
        {
          type: 'input',
          name: 'database_port',
          message: "Database port number :",
          default:'3306'
        }
      ])

      const { database_name } = await inquirer.prompt([
        {
          type: 'input',
          name: 'database_name',
          message: "The name of the database you want to use :",
          default:'my-database'
        }
      ])


      const { database_account } = await inquirer.prompt([
        {
          type: 'input',
          name: 'database_account',
          message: "Enter the database account :",
          default:'root'
        }
      ])


      const  {database_password}  = await inquirer.prompt([
        {
          type: 'password',
          name: 'database_password',
          message: "Enter the database password :",
          mask:true
        }
      ])


      inquirerInfo = {
        framework:framework,
        redisUse:redisUse,
        database:{
          kind:database,
          port:database_port,
          name:database_name,
          account:database_account,
          password:database_password,
      }
    }
    return inquirerInfo;
  }

  module.exports = {
    inquirerPart
}