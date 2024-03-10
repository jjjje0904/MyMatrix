const indexController = require('../controller/indexController');
const {jwtMiddleware} = require('../../jwtMiddleware');

exports.indexRouter = function(app) {
   //일정 CRUD
   app.post("/todo",jwtMiddleware,indexController.createdTodo); //create
   app.get("/todos",jwtMiddleware,indexController.readTodo) //read
   app.patch("/todo",jwtMiddleware,indexController.updateTodo); //update
   app.delete("/todo/:todoIdx",jwtMiddleware,indexController.deleteTodo) //delete(delete는 body요청 쓰지 않음)

   app.get(
    "/dummy",
    function (req, res, next) {
      console.log(1);
      next();
    },
    function (req, res, next) {
      console.log(2);
      next();
    },
    function (req, res) {
      console.log(3);
    }
  );

};

