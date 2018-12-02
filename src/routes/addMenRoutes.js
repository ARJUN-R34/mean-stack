const express=require('express');

const addMenRouter=express.Router();

function router(nav) {
  addMenRouter.route('/')
    .get((req,res)=> {
      res.render('addNewMen',{
        nav
      });
    });
    return addMenRouter;
}

module.exports=router;
