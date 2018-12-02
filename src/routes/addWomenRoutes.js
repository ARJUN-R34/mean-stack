const express=require('express');

const addWomenRouter=express.Router();

function router(nav) {
  addWomenRouter.route('/')
    .get((req,res)=> {
      res.render('addNewWomen',{
        nav
      });
    });
    return addWomenRouter;
}

module.exports=router;
