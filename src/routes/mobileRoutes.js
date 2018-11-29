const express=require('express')

const mobileRouter=express.Router();

function router(nav) {
  mobileRouter.route('/')
    .get((req,res)=>{
      res.render('mobiles',{
        nav
      });
    });
    return mobileRouter;
}

module.exports=router;
