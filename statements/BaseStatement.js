class Statement {
    
    transpile() {
        // Return here the js code corresponding to the statement
        // Every statement subclass should implement this method
        throw "Transpile method not implemented."
    }

    toString(){
        throw "toString method not implemented."
    }
}

module.exports = Statement;