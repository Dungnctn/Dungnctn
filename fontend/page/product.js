import Header from "../compernents/header";

const Product = {
    render() {
        return /*html*/ `
        <div class="container">
            ${Header.render()}
            <div>
                product
            </div>
        </div>
        
        `
    }

}

export default Product;