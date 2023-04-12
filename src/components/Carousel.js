import React from "react";

const Carousel = (props) => {
    return(
        <ul className="flex h-2/6 content-center items-center justify-center p-6 text-3xl text-center overflow-hidden text-slate-200 [&>*]:min-w-60 [&>*]:min-h-60
        [&>*]:m-3">
            { props.jobs.map( (job,index) => (
                <li key={job.id} className=" flex flex-col justify-end p-5 rounded-lg from-slate-400 to-slate-900 bg-gradient-to-b">
                    <p className="pb-5 font-bold">{job.titulo}</p>
                    <button className="mx-5 border-2 border-ubuntu-orange rounded-xl font-light">
                        About it
                    </button>

                </li>
            ))}
        </ul>
    );
};

export default Carousel;