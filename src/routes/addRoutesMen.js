const express=require('express');

const MensData=require('../model/mensdata');

const addRouterMen=express.Router();

function router(nav) {
  addRouterMen.route('/')
    .get((req,res)=>{
      var item={
        brand: req.param("category"),
        model: req.param("brand"),
        size: req.param("size")
      }
      var men=new MensData(item);
      men.save();
      res.redirect('/categories/mens')
    });

  return addRouterMen;
}

module.exports=router;
