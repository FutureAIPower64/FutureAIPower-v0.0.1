
var mongoose = require('mongoose');
var ToolsSchema = new mongoose.Schema({
    title: {
        type :String
    },
    content: {
        type: String
    },
    tags: {
        type: String
    },
    images:{
        type: String
    }
})

module.exports = mongoose.model('tools', ToolsSchema)