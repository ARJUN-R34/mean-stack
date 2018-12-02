const express=require('express');

const addLaptopRouter=express.Router();

function router(nav) {
  addLaptopRouter.route('/')
    .get((req,res)=> {
      res.render('addnew',{
        nav
      });
    });
    return addLaptopRouter;
}

module.exports=router;
