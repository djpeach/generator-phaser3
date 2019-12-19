const Generator = require('yeoman-generator');
const yosay = require('yosay');

module.exports = class extends Generator {

  // 0. Where you can set up arguments and options
  constructor(args, opts) {
    super(args, opts)
  }

  // 1. Your initialization methods (checking current project state, getting configs, etc)
  initializing() {
    
  }

  // 2. Where you prompt users for options (where you’d call this.prompt())
  async prompting() {
    this.answers = await this.prompt([
      {
        name: 'gameName',
        type: 'input',
        message: 'What would you like to call your game?'
      },
      {
        name: 'description',
        type: 'input',
        message: 'A short description of your game',
        default: 'My Phaser Game!'
      }
    ])
  }

  // 3. Saving configurations and configure the project (creating .editorconfig files and other metadata files)
  configuring() {
    this.spawnCommand('mkdir', this.destinationPath(this.answers.gameName), '-p')
    this.destinationRoot(this.destinationPath(this.answers.gameName))
    this.config.save()
  }
  
  // 4. If the method name doesn’t match a priority, it will be pushed to this group.
  default() {

  }

  // 5. Where you write the generator specific files (routes, controllers, etc)
  writing() {
    this.fs.copyTpl(
      this.templatePath('.'),
      this.destinationPath('.'),
      {...this.answers}
    )
  }

  // 7. Where installations are run (npm, bower)
  install() {
    // eg this.npmInstall(['lodash'], { 'save-dev': true });
  }

  // 8. Called last, cleanup, say good bye, etc
  end() {
    this.log(yosay(`Run your new game with 'npm start', build it with 'npm run build', and run it in electron with 'npm run app'!`));
  }
}