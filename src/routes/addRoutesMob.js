const express=require('express');

const MobileData=require('../model/mobiledata');

const addRouterMob=express.Router();

function router(nav) {
  addRouterMob.route('/')
    .get((req,res)=>{
      var item={
        brand: req.param("brand"),
        model: req.param("model"),
        price: req.param("price")
      }
      var mobile=new MobileData(item);
      mobile.save();
      res.redirect('/categories/mobiles')
    });

  return addRouterMob;
}

module.exports=router;
