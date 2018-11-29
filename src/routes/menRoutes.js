const express=require('express')

const menRouter=express.Router();

function router(nav) {
  menRouter.route('/')
    .get((req,res)=>{
      res.render('men',{
        nav
      });
    });
    return menRouter;
}

module.exports=router;
