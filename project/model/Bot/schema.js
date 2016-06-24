module.exports = (function() {
    var mongoose = require("mongoose");

    var BotSchema = mongoose.Schema({
        name: String,
        subtitle: String,
        description: String,
        rating: Number,
        discord: {
            id: String,
            avatar: String,
            permissions: String
        },
        owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
        comments: {type: mongoose.Schema.Types.ObjectId, ref: 'CommentBlock'},
        dateCreated: {type: Date, default: Date.now}
    }, {collection: "project.bot"})
        .index({name: 'text', subtitle: 'text', description: 'text'},
            {name: 'SearchIndex', weights: {name: 10, subtitle: 5, description: 1}});

    return BotSchema;
})();