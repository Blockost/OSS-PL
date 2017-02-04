let BaseStatement = require('./BaseStatement');

class PrintStatement extends BaseStatement {
    constructor(statementArgs) {
        super()
        /**
         * A print statement should be composed by
         * - Basically anything could be possible
         * - If arg statement starts with a quote mark,
         *      this is a string and a closing quote must be at the end
         */

        statementArgs = statementArgs.trim();
        
        if (statementArgs[0] === "'" && statementArgs[statementArgs.length - 1] !== "'")
            throw 'Expected \' but found "'

        if (statementArgs[0] === '"' && statementArgs[statementArgs.length - 1] !== '"')
            throw 'Expected " but found \''
        
        //TODO Check for quote marks matching at the end, e.g, HelloWorl" or HelloWorld'
        // That's not a string...
        this.value = statementArgs;
    }

    transpile() {
        return `console.log(${this.value})`
    }

    toString(){
        return {
            statement: 'PrintStatement',
            args: this.value
        }
    }
}

module.exports = PrintStatement