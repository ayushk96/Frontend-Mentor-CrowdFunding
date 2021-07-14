import React, {useState} from 'react'
import {Modal} from 'antd';
import data from '../data'
import Final from './Final'

const Pledges = () => {
    const[card,setCards] = useState(data);
    const [isAddModal,setisAddModal] = useState(false);

    const handleOk = () => {
        setisAddModal(false);
    };

    const handleCancel = () => {
        setisAddModal(false);
    };

    return (
        <>
            <div className="data grid grid-cols-1 gap-5">
                {card.map((card) => {
                    const { id, title, pledge, desc, left, button } = card
                    return (
                        <article key={id} className="border-2 p-5">
                            <h3 className="font-bold text-lg">{title}</h3>
                            <p className="desc font-bold">{pledge}</p>
                            <p className="desc-inner my-5">{desc}</p>
                            <p className="desc-inner font-bold text-4xl flex items-center mb-5">{left} <span className="font-light text-base text-gray-600 ml-3">left</span></p>
                            {id==3 &&
                                <button className="btn py-2 px-6 rounded-full text-white" >{button}</button>
                            }
                            
                            {id!=3 && 
                                <button className="btn py-2 px-6 rounded-full text-white" onClick={()=> setisAddModal(true)}>{button}</button>
                            }
                        </article>
                    )
                })}
            </div>
            {isAddModal && <Modal
                    title={null}
                    footer={null}
                    visible={isAddModal}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={400}
                >
                <Final closeModal={setisAddModal}/>
                </Modal>}
        </>
    )
}

export default Pledges