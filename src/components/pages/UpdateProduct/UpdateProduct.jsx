import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
    const product = useLoaderData()

    const handleUpdateProduct = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const updatedProduct = { title, brand, category, photo, price, ratting }
        console.log(updatedProduct)

        fetch(`https://electronic-brand-shop-server-6wuv5y0n2-rabby4s-projects.vercel.app/products/${product._id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire(
                        'Product updated!',
                        'Your Product has been Updated.',
                        'success'
                    )
                }
            })


    }
    return (
        <div className='container mx-auto lg:px-0 md:px-10 px-5'>
            <div className='my-10'>
                <h2 className='text-center lg:text-5xl md:text-4xl text-3xl font-bold'>Update Product</h2>
            </div>
            <div className='card flex-shrink-0 max-w-3xl shadow-xl mx-auto'>
                <form onSubmit={handleUpdateProduct} className="card-body">
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input type="text" placeholder={product.title} name='title' className="input input-bordered" required />
                    </div>
                    <div className='flex md:flex-row flex-col gap-5'>
                        <div className="form-control mb-3 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Brand Name</span>
                            </label>
                            <input type="text" placeholder={product.brand} name='brand' className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Select your product category</span>
                            </label>
                            <select className="select select-bordered" name='category'>
                                <option disabled selected>{product.category}</option>
                                <option value='phone'>Phone</option>
                                <option value='camera'>Camera</option>
                                <option value='computer'>Computer</option>
                                <option value='laptop'>Laptop</option>
                                <option value='drone'>Drone</option>
                                <option value='smartWatch'>Smart Watch</option>
                                <option value='headphone'>Headphone</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-medium">Photo URL</span>
                        </label>
                        <input type="text" placeholder="Product Photo URL..." name='photo' className="input input-bordered" required />
                    </div>

                    <div className='flex md:flex-row flex-col gap-5'>
                        <div className="form-control mb-3 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Price</span>
                            </label>
                            <input type="text" placeholder={product.price} name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Ratting</span>
                            </label>
                            <input type="text" placeholder={product.ratting} name='ratting' className="input input-bordered" required />
                        </div>
                    </div>

                    <div className="form-control">
                        <button className="btn bg-orange-600 hover:bg-orange-500 text-white text-base">Update Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateProduct;