/**
 * Parse OSS code and find structure errors
 */

const def = require('./def')
const DeclareVarStatement = require('./statements/DeclareVarStatement')
const PrintStatement = require('./statements/PrintStatement')

const parser = {}

parser.tryParse = (line, lineNumber) => {
    let statement = this.tokenize(line, ':', true)
    let keyword = statement.splice(0, 1)[0]
    try {
        switch (keyword) {
            case def.DECLARE_VAR:
                return this.tryParseVariableDeclarationStatement(statement)

            case def.PRINT:
                return this.tryParsePrintStatement(statement)
            
            
            
            // No match
            default:
                this.parseError()
                break;
        }
    } catch (err) {
        throw `"${err}" at line ${lineNumber}`
    }
}

/**
 *
 * @param statementArgs
 */
this.tryParseVariableDeclarationStatement = (statementArgs) => {
    new DeclareVarStatement(statementArgs).toString()
}


this.tryParsePrintStatement = (statementArgs) => { 
    return new PrintStatement(statementArgs[0]).transpile();
}


this.parseError = () => {
    throw def.PARSE_ERROR
}

/**
 * Remove all white spaces from a string
 * @param line
 */
this.removeWhiteSpaces = (line) => {
    return line.replace(/\s/g, '')
}

/**
 *
 * @param {string} line The line to tokenize
 * @param {String} token The char(s) the line will be split upon
 * @param {boolean} cleanUp A boolean specifying if empty strings and semi-colons should be sliced
 * @returns {Array} An array of string containing each string parts separated by
 * the specified token
 */
this.tokenize = (line, token, cleanUp) => {

    if (!token) token = ''
    let tokens = line.trim().split(token)
    if (cleanUp) {
        tokens = tokens.filter((char) => {
            return char !== ''
        });
    }
    return tokens
}

module.exports = parser