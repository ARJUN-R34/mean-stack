const express=require('express');

const addMobRouter=express.Router();

function router(nav) {
  addMobRouter.route('/')
    .get((req,res)=> {
      res.render('addNewMobile',{
        nav
      });
    });
    return addMobRouter;
}

module.exports=router;
