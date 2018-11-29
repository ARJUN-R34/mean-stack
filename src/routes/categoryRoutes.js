const express=require('express')

const categoryRouter=express.Router();

function router(nav) {
  categoryRouter.route('/')
    .get((req,res)=>{
      res.render('category',{
        nav
      });
    });

    categoryRouter.route('/laptops')
      .get((req,res)=>{
        res.render('laptops',{
          nav
        });
      });

      categoryRouter.route('/mobiles')
        .get((req,res)=>{
          res.render('mobiles',{
            nav
          });
        });

        categoryRouter.route('/mens')
          .get((req,res)=>{
            res.render('mens',{
              nav
            });
          });

          categoryRouter.route('/womens')
            .get((req,res)=>{
              res.render('womens',{
                nav
              });
            });

    return categoryRouter;
}

module.exports=router;
