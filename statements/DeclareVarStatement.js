let BaseStatement = require('./BaseStatement')

class DeclareVarStatement extends BaseStatement {
    constructor(statementArgs) {
        super()
        /**
         * A variable declaration statement should be composed by
         * - the variable name
         * - the '=' operator
         * - the value which must be affected
         */
        this.varName = statementArgs[0];
        this.equalOperator = statementArgs[1];
        this.value = statementArgs[2];
    }

    transpile() {
        console.log('TODO transpile method !');
    }

    toString() {
        return {
            statement: 'DeclareVarStatement',
            args: this.value
        }
    }
}

module.exports = DeclareVarStatement;