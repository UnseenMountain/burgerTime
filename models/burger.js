var orm = require("../config/orm.js");

var food = {
    all: function(cb){
        orm.all("foods", function(res){
            cb(res);
        })
    },

    create: function(){
        orm.create("food", cols, vals, function(res){
            cb(res);
        });
    },

    update: function(objColVal, condition, cb) {
        orm.update("food", objColVal, condition, function(res){
            cb(res)
        });
    }
};

module.exports = food;