  
var orm = require("../config/orm.js");


var burger = {
    all: function(cb){
        orm.all("burger", function(res){
            cb(res);
        });
    },

    create: function (col, values, cb){
        orm.create("burger", col, values, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("burger", objColVals, condition, function(res){
            cb(res)
        });
    },
    delete: function(condition, cb) {
        orm.delete("burger", condition, function(res) {
          cb(res);
        });
      }

};

module.exports = burger;