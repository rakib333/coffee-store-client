import './Banner.css'

const Banner = () => {
    return (
        <div className="bg-[url('/src/assets/images/more/3.png')] bg-center bg-no-repeat bg-cover h-80 sm:h-[550px]">

            <div className='wrapper'>
                <div className='sm:w-1/2 ml-5 sm:ml-auto sm:pt-48 pt-16'>
                    <h2 className="text-white text-4xl md:text-4xl">Would you like a Cup of Delicious Coffee?</h2>
                    <p className='py-3 font-light text-lg text-white'>It is coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                    <button className='btn btn-warning hover:bg-transparent hover:text-white'>Learn more</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;