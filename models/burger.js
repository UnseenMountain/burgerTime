  
var orm = require("../config/orm.js");


var food = {
    all: function(cb){
        orm.all("food", function(res){
            cb(res);
        });
    },

    create: function (col, values, cb){
        orm.create("food", col, values, function(res){
            cb(res);
        });
    },

    update: function(objColVals, condition, cb) {
        orm.update("food", objColVals, condition, function(res){
            cb(res)
        });
    },
    delete: function(condition, cb) {
        orm.delete("food", condition, function(res) {
          cb(res);
        });
      }

};

module.exports = food;