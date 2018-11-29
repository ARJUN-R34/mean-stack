const express=require('express');

const aboutRouter=express.Router();

function router(nav) {
  aboutRouter.route('/')
    .get((req,res)=> {
      res.render('about',{
        nav
      });
    });
    return aboutRouter;
}

module.exports=router;
