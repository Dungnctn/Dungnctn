import Footer from "../compernents/footer";
import Header from "../compernents/header";
import Content from "./content";
import HeadContent from "./headcontent";
import PopularProduct from "./popu_pro";
import Slider from "./slide";
import Tab from "./tab";

const Home = {
    render() {
        return /*html*/`

        <div class="container">
            ${Header.render()}
            ${Slider.render()}
            ${Content.render()}
            ${Tab.render()}
            ${HeadContent.render()}
            ${Footer.render()}
        </div>
        `;
        
    }
    
}
export default Home;
{/* <div class="banner max-w-9xl">
    <img src="https://picsum.photos/1444/400" alt="" class=" mx-auto">
</div> */}