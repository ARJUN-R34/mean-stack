const express=require('express')

const categoryRouter=express.Router();

function router(nav) {
  categoryRouter.route('/')
    .get((req,res)=>{
      res.render('category',{
        nav
      });
    });
    return categoryRouter;
}

module.exports=router;
