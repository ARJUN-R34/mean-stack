const express=require('express');

const WomensData=require('../model/womensdata');

const addRouterWomen=express.Router();

function router(nav) {
  addRouterWomen.route('/')
    .get((req,res)=>{
      var item={
        category: req.param("category"),
        brand: req.param("brand"),
        price: req.param("price")
      }
      var women=new WomensData(item);
      women.save();
      res.redirect('/categories/womens')
    });

  return addRouterWomen;
}

module.exports=router;
