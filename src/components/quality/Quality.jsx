import { useEffect } from "react";
import { useState } from "react";


const Quality = () => {

    const [quality, setQuality] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/qualities')
            .then(res => res.json())
            .then(data => setQuality(data))
    }, [])

    return (
        <div className="bg-[#ECEAE3] w-full py-10">
            <div className="wrapper">
                <div className="grid grid-cols-1 md:grid-cols-4 md:gap-10">
                    {
                        quality.map(q =>
                            <div key={q._id} className="border-slate-300 border-2 p-3 rounded-xl hover:bg-slate-100">
                                <img className="w-[70px] h-[70px]" src={q.image} alt="" />
                                <h2 className="text-4xl text-[#331A15] font-normal my-3">{q.title}</h2>
                                <p className="text-[#1B1A1A] text-base font-light">{q.details}</p>
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default Quality;