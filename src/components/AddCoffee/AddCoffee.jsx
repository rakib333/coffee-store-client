import { Link } from "react-router-dom";
import { toast } from "react-toastify";


const AddCoffee = () => {

    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const details = form.details.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const newCoffee = { name, email, supplier, taste, details, photo, category };
        console.log(newCoffee)

        // send data to server
        fetch('http://localhost:5000/coffees', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    toast.success('Coffee added successfully', {
                        position: "top-right",
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "colored",
                    });
                    form.reset();
                }
            })


    }


    return (
        <div className="bg-[url('/src/assets/images/more/11.png')] bg-no-repeat bg-cover bg-center mb-[120px]">
            <div className="wrapper pt-7">
                <div className="mb-5">
                    <Link to='/'>Back to home</Link>
                </div>
                <form onSubmit={handleAddCoffee} className="bg-[#F4F3F0] rounded-xl py-[70px] sm:px-8 md:px-[100px]">
                    <div className="text-center mb-7">
                        <h2 className="text-[#374151] font-semibold text-5xl mb-5">Add New Coffee</h2>
                        <p className="text-[#5C5B5B] text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at <br /> its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed <br /> to using Content here.</p>
                    </div>
                    <div className="sm:flex gap-5 mb-5">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Coffee Name</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Coffee name" className="input input-bordered w-full" name="name" />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <label className="input-group">
                                <input type="email" placeholder="Your email" className="input input-bordered w-full" name="email" />
                            </label>
                        </div>
                    </div>
                    <div className="sm:flex gap-5 mb-5">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Supplier</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Supplier" className="input input-bordered w-full" name="supplier" />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Taste</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Coffee Taste" className="input input-bordered w-full" name="taste" />
                            </label>
                        </div>
                    </div>
                    <div className="sm:flex gap-5 mb-5">
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Category</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Category" className="input input-bordered w-full" name="category" />
                            </label>
                        </div>
                        <div className="form-control sm:w-1/2">
                            <label className="label">
                                <span className="label-text">Details</span>
                            </label>
                            <label className="input-group">
                                <input type="text" placeholder="Coffee Details" className="input input-bordered w-full" name="details" />
                            </label>
                        </div>
                    </div>
                    <div className="form-control w-full mb-7">
                        <label className="label">
                            <span className="label-text">Photo url</span>
                        </label>
                        <label className="input-group">
                            <input type="text" placeholder="Coffee Photo url" className="input input-bordered w-full" name="photo" />
                        </label>
                    </div>
                    <input type="submit" className="btn btn-block bg-[#D2B48C] border-2 border-[#331A15] hover:bg-[#D2B48C]" value="Add Coffee" />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;