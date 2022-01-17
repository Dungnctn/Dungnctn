import Navigo from "navigo";
import Dashboard from "./backend/dashboard";
import AdminNew from "./backend/new";
import AdminAddNew from "./backend/newadd";
import Home from "./fontend/page/home";
import Product from "./fontend/page/product";
import Signin from "./fontend/page/signin";

const router = new Navigo("/",{linksSelector: "a"});

const print = (content) => {
    document.getElementById("app"). innerHTML = content;
}

router.on({
    "/": () => {
        print(Home.render());
    },
    "/product": () => {
        print(Product.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/admin/dashboard": () => {
        print(Dashboard.render());
    },
    "/admin/news": () => {
        print(AdminNew.render());
    },
    "/admin/news/add": () => {
        print(AdminAddNew.render());
    },
})



router.resolve();
