const Nav = {
    render() {
        return /*html*/ `
            <nav class="max-w-7xl mx-auto bg-[#ffffff]">
                <div class="inline-block">
                    <a href="">
                    <img src="http://rubee.com.vn/admin/img/news/201508281355281f8979c25882c2299311cd761870aecf.png" alt="" class="w-36">
                </div><div class="float-right">
                    <a href="/product" class=" py-8 px-4 font-bold float-right text-3xl"><i class="ri-luggage-cart-line"></i></a>
                </div>
                <div class="float-right">
                    <ul class="flex">
                        <li><a href="/"        class=" py-10 px-4 font-bold float-right">Trang chủ</a></li>
                        <li><a href="/category"   class=" py-10 px-4 font-bold float-right">Danh mục</a></li>
                        <li><a href="/product"    class=" py-10 px-4 font-bold float-right">Sản phẩm</a></li>
                        <li><a href="/news"    class=" py-10 px-4 font-bold float-right">Page</a></li>
                        <li><a href="/product" class=" py-10 px-4 font-bold float-right">Liên hệ</a></li>
                        <li><a href="/product" class=" py-10 px-4 font-bold float-right">Tuyển dụng</a></li>
                        
                    </ul>
                </div>
                
            </nav>
        
        `
    }
}

export default Nav