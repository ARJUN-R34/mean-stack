  const express=require('express')

  const laptopRouter=express.Router();

  function router(navlap) {
    laptopRouter.route('/addnewlap')
      .get((req,res)=>{
        res.render('addNewLaptop',{
          navlap
        });
      });
      return laptopRouter;
  }

  // laptopRouter.route('/')
  //     .get((req,res)=>{
  //       res.render('laptops',{
  //         nav
  //       });
  //     });



module.exports=router;
