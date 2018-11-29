const express=require('express')

const contactRouter=express.Router();

function router(nav) {
  contactRouter.route('/')
    .get((req,res)=> {
      res.render('contactus',{
        nav
      });
    });

    return contactRouter;
}

module.exports=router;
