const express=require('express')

const womenRouter=express.Router();

function router(nav) {
  womenRouter.route('/')
    .get((req,res)=>{
      res.render('women',{
        nav
      });
    });
    return womenRouter;
}

module.exports=router;
