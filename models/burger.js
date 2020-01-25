var orm = require("../config/orm.js");

var food = {
    all: function(cb){
        orm.all("foods", function(res){
            cb(res);
        })
    },

    create: function(){}
}