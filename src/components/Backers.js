import React from 'react'

const Backers = () => {
    return (
        <>
            <section className="bg-white mt-10 mx-5 px-5 py-10 flex items-center justify-center flex-col rounded-lg border-2 lg:w-2/3 lg:mx-auto">
                <p className="border-b border-gray-200 pb-3"><span className="font-bold text-4xl">$89,914</span><br /> of $100,000 backed</p>
                <p className="border-b border-gray-200 pb-3 mt-5"><span className="font-bold text-4xl">5,007</span><br /> total backers</p>
                <p className="border-b border-gray-200 pb-3 mt-5"><span className="font-bold text-4xl">56</span><br /> days left</p>
                <div className="w-9/12 h-4 bg-gray-300 rounded-full ">
                    <p className="btn py-2 rounded-full w-9/12"></p>
                </div>
            </section>
        </>
    )
}

export default Backers