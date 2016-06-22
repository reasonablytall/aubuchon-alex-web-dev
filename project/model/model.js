module.exports = (function() {

    var mongoose = require('mongoose');

    var connectionString = 'mongodb://127.0.0.1:27017/cs4550project';

    if(process.env.OPENSHIFT_MONGODB_DB_PASSWORD) {
        connectionString = process.env.OPENSHIFT_MONGODB_DB_USERNAME + ":" +
            process.env.OPENSHIFT_MONGODB_DB_PASSWORD + "@" +
            process.env.OPENSHIFT_MONGODB_DB_HOST + ':' +
            process.env.OPENSHIFT_MONGODB_DB_PORT + '/' +
            process.env.OPENSHIFT_APP_NAME;
    }

    mongoose.connect(connectionString);

    var userModel = require("./User/model.js");
    
    var models = {
        userModel: userModel
    };

    return models;
})();
