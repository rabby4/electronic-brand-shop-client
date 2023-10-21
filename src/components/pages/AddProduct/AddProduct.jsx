import Swal from "sweetalert2";

const AddProduct = () => {

    const handleAddProduct = e => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const brand = form.brand.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const ratting = form.ratting.value;
        const description = form.description.value;
        const newProduct = { title, brand, category, photo, price, ratting, description }
        console.log(newProduct)

        fetch('http://localhost:5000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged === true) {
                    Swal.fire(
                        'Product Added!',
                        'Your new product has been added.',
                        'success'
                    )
                }
            })


    }


    return (
        <div className='container mx-auto lg:px-0 md:px-10 px-5'>
            <div className='my-10'>
                <h2 className='text-center lg:text-5xl md:text-4xl text-3xl font-bold'>Add your Product</h2>
            </div>
            <div className='card flex-shrink-0 max-w-3xl shadow-xl mx-auto'>
                <form onSubmit={handleAddProduct} className="card-body">
                    <div className="form-control mb-3">
                        <label className="label">
                            <span className="label-text font-semibold">Product Name</span>
                        </label>
                        <input type="text" placeholder="Enter your product title..." name='title' className="input input-bordered" required />
                    </div>
                    <div className='flex gap-5 md:flex-row flex-col'>
                        <div className="form-control mb-3 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Brand Name</span>
                            </label>
                            <input type="text" placeholder="Write your product brand.." name='brand' className="input input-bordered" required />
                        </div>

                        <div className="form-control md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Select your product category</span>
                            </label>
                            <select className="select select-bordered" name='category'>
                                <option disabled>Select Category</option>
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
                            <input type="text" placeholder="Product Price..." name='price' className="input input-bordered" required />
                        </div>
                        <div className="form-control mb-3 md:w-1/2">
                            <label className="label">
                                <span className="label-text font-semibold">Ratting</span>
                            </label>
                            <input type="text" placeholder="Product Ratting..." name='ratting' className="input input-bordered" required />
                        </div>
                    </div>
                    <div className="form-control mb-3 w-full">
                        <label className="label">
                            <span className="label-text font-semibold">Product Short Description</span>
                        </label>
                        <textarea className="textarea textarea-bordered" name='description' placeholder="Write short description..."></textarea>
                    </div>

                    <div className="form-control">
                        <button className="btn bg-orange-600 hover:bg-orange-500 text-white text-base">Add Your Product</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddProduct;