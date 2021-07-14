import React, { useState } from 'react'
import { Radio } from 'antd';
import data from '../data2'
import {Modal} from 'antd'
import Final from './Final'

const Pledges2 = ({closeModal}) => {
    const [card, setCards] = useState(data);
    const [value, setValue] = useState(0);
    const [isAddModalVisible,setisAddModalVisible] = useState(false);

    const onChange = e => {
        card.forEach(element => {
            let idd = "name_" + element.id;
            //console.log(card);
            document.getElementById(idd).className = 'hidden';
        });
        if(e.target.value != 4){
        console.log('radio checked', card[e.target.value]);
        setValue(e.target.value);
        let idd = "name_" + e.target.value;
        console.log(document.getElementById(idd));
        document.getElementById(idd).className = 'block';
        }
    };

    const showModal = () => {
        console.log("ans");
        //this.setState({ isAddModalVisible: true });
        setValue(0);
        setisAddModalVisible(true);
    };

    const handleOk = () => {
        //this.setState({ isAddModalVisible: false });
        setValue(0);
        setisAddModalVisible(false);
    };

    const handleCancel = () => {
        //this.setState({ isAddModalVisible: false });
        setValue(0);
        setisAddModalVisible(false);
    };

    return (
        <>
                {console.log(closeModal)}
            <div className="data grid grid-cols-1 gap-5">
                {card.map((card) => {
                    const { id, title, pledge, desc, left, button } = card;
                    let amount = pledge.split(' ');
                    amount = amount[1];
                    if (id == 1) {
                        return (
                            <article key={id} className="border-2 p-5">
                                <div className="flex">
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={id}></Radio>
                                    </Radio.Group>
                                    <div>
                                        <p className="desc font-bold">{pledge}</p>
                                        <p className="desc-inner my-5">{desc}</p>
                                    </div>
                                </div>
                                <div id={`name_${id}`} className="hidden">
                                    <div className="flex justify-between border-t pt-6">
                                        <div className="flex">
                                            <p>Clink On Continue</p>
                                        </div>
                                        <div>
                                            <button className="btn py-2 px-8 rounded-full text-white h-9" onClick={()=> showModal()} >{button}</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    }
                    else {
                        return (
                            <article key={id} className="border-2 p-5">
                                <div className="flex">
                                    <Radio.Group onChange={onChange} value={value}>
                                        <Radio value={id}></Radio>
                                    </Radio.Group>
                                    <div>
                                        <div className="flex justify-between">
                                            <div className="flex">
                                                <h3 className="font-bold text-lg">{title}</h3>
                                                <p className="desc font-bold pl-2 py-1">{pledge}</p>
                                            </div>
                                            <div>
                                                <p className="desc-inner font-bold text-xl flex items-center mb-5">{left} <span className="font-light text-base text-gray-600 ml-3">left</span></p>
                                            </div>
                                        </div>
                                        <p className="desc-inner my-5">{desc}</p>
                                    </div>
                                </div>
                                <div id={`name_${id}`} className="hidden">
                                    <div className="flex justify-between border-t pt-6">
                                        <div className="flex">
                                            <p>Enter Your Pledge</p>
                                        </div>
                                        <div className="flex justify-between">
                                            <p className="py-1 rounded-full border-2 mr-2 h-9 px-4 pb-4 align-center"> <span className="font-bold text-xl border-r px-2">{amount[0]}</span><span className="px-2">{amount.slice(1)}</span></p>
                                            <button className="btn py-2 px-8 rounded-full text-white h-9" onClick={()=> setisAddModalVisible(true)}>{button}</button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        )
                    }
                })}
            </div>
            {console.log(closeModal)}
            {isAddModalVisible && <Modal
                    title={null}
                    footer={null}
                    visible={isAddModalVisible}
                    onOk={handleOk}
                    onCancel={handleCancel}
                    width={400}
                >
                {closeModal()}
                <Final closeModal={setisAddModalVisible}/>
                </Modal>}
        </>
    )
}

export default Pledges2