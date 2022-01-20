import Navigo from "navigo";
import Dashboard from "./backend/dashboard";
import AdminNew from "./backend/new";
import AdminAddNew from "./backend/newadd";
import Blog from "./fontend/page/blog";
import Home from "./fontend/page/home";
import NewDetail from "./fontend/page/newDetail";
import Product from "./fontend/page/product";
import Signin from "./fontend/page/signin";
import Signup from "./fontend/page/signup";

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
    "/blog": () => {
        print(Blog.render());
    },
    "/signin": () => {
        print(Signin.render());
    },
    "/signup": () => {
        print(Signup.render());
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
    "/news/:id": ({data}) => {
        const {id} = data;
        print(NewDetail.render(id));
    }
}).resolve()
// router.resolve();
