import Header from "../compernents/header";
import HeadContent from "./headcontent";
import Slider from "./slide";

const Home = {
    render() {
        return /*html*/`

        <div class="container">
            ${Header.render()}
            ${Slider.render()}
            ${HeadContent.render()}
        </div>
        `;
        
    }
    
}
export default Home;
{/* <div class="banner max-w-9xl">
    <img src="https://picsum.photos/1444/400" alt="" class=" mx-auto">
</div> */}