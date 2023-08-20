import { Link } from "react-router-dom";

const PopularCoffee = () => {
    return (
        <div className="">
            <div className="wrapper">
                <Link to={'/addCoffee'}>
                    <button className="btn btn-warning">Add coffee</button>
                </Link>
                <h2>this is PopularCoffee</h2>
            </div>
        </div>
    );
};

export default PopularCoffee;