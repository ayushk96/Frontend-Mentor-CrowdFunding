import React from 'react';
import { Button } from 'antd';
import check from '../images/icon-check.svg'

const Final = ({closeModal}) => {

    return (
        <>
            <div className="flex items-center justify-center">
                <img src={check} alt="" />
            </div>
            <div>
                <h3 className="font-bold text-xl flex items-center justify-center">Thanks for your support!</h3>
                <p>Your pledge brings us one step closer to sharing Mastercraft Bamboo Monitor Riser worldwide. You will get
            an email once our campaign is completed.</p>
            </div>
            <div className="flex items-center justify-center">
                <button className="btn1 py-2 px-8 rounded-full text-white h-9" onClick={()=> closeModal(false)}>Got It!</button>
            </div>
        </>
    );
};

export default Final