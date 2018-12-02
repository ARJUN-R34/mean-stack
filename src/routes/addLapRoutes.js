const express=require('express');

const addLapRouter=express.Router();

function router(nav) {
  addLapRouter.route('/')
    .get((req,res)=> {
      res.render('addNewLaptop',{
        nav
      });
    });

    addLapRouter.route('/add')
      .get((req,res)=>{
        var item={
          brand: req.param("brand"),
          model: req.param("model"),
          price: req.param("price")
        }
        var laptop=new laptopdata(item);
        laptop.save();
        res.redirect('/laptops')
      });

    return addLapRouter;
}

module.exports=router;
