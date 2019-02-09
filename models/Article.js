const mongoose = require("mongoose");

const Schema = mongoose.Schema;
var ArticleSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    location: {
        type:String,
        required: true
    },
    link: {
        type: String,
        required: true 
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

const Article = mongoose.model("Article", ArticleSchema);

module.exports = Article;
