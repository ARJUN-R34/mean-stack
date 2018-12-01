const express=require('express')

const laptopRouter=express.Router();

function router(navadd) {
  laptopRouter.route('/')
    .get((req,res)=>{
      res.render('laptops',{
        nav
      });
    });
    return laptopRouter;
}

module.exports=router;
