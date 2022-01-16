import Navigo from "navigo";
import Home from "./fontend/page/home";

const router = new Navigo("/",{linksSelector: "a"});

const print = (content) => {
    document.getElementById("app"). innerHTML = content;
}

router.on({
    "/": () => {
        print(Home.render());
    },
})

router.resolve();
