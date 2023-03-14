const express=require("express")
const router= express.Router()


const {signUp,login}= require("../Controller/testcontroller")
const {addbookLists,getallBooks,updateBook,deleteBook}=require("../Controller/bookcontroller")
const {addsalesLists, getallSales,updateSale,deleteSale}=require("../Controller/salescontroller")
const{ addclientLists,getallClients}=require("../Controller/clientcontroller")
const{ addcustomerLists,getallCustomers,updateCustomer,deleteCustomer}=require("../Controller/customercontroller")
const addOrder=require("../Controller/ordercontroller")


router.route("/login").post(login);
router.route("/signup").post(signUp);

router.route("/booklist").post(addbookLists);
router.route("/getallbooks").get(getallBooks);
router.route("/update").put(updateBook);
router.route("/delete/:del").delete(deleteBook);


router.route("/addsalelist").post(addsalesLists);
router.route("/getallsales").get(getallSales);
router.route("/updatesale").put(updateSale);
router.route("/deletesale/:del").delete(deleteSale);


router.route("/addclientlist").post(addclientLists);
router.route("/getallclients").get(getallClients);




router.route("/addcustomer").post(addcustomerLists);
router.route("/getallcustomers").get(getallCustomers);
router.route("/updatecustomer").put(updateCustomer);
router.route("/deletecust/:del").delete(deleteCustomer);


router.route("/placeorder").post(addOrder);


module.exports=router 