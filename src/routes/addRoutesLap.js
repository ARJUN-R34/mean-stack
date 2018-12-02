const express=require('express');

const LaptopData=require('../model/laptopdata');

const addRouterLap=express.Router();

function router(nav) {
  addRouterLap.route('/')
    .get((req,res)=>{
      var item={
        brand: req.param("brand"),
        model: req.param("model"),
        price: req.param("price")
      }
      var laptop=new LaptopData(item);
      laptop.save();
      res.redirect('/categories/laptops')
    });

  return addRouterLap;
}

module.exports=router;
