import "./productList.css"
import Product from "../product/Product"
import {products} from "../../data"
const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h1 className="pl-title">Create & Inspire. It's Rezdian</h1>
                <p className="pl-desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur hic nulla, exercitationem ea, accusamus veniam veritatis doloribus laboriosam dolor debitis nobis perferendis, reprehenderit asperiores placeat culpa accusantium similique eos mollitia.</p>
            </div>
            <div className="pl-list">
                {products.map((item) =>
                (<Product key={item.id} img={item.img} link={item.link}/>))}
            </div>
        </div>
    )
}

export default ProductList
