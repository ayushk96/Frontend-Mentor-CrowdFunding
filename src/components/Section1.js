import React from 'react';
import { Modal } from "antd";
import mastercraft from "../images/logo-mastercraft.svg";
import bookmark from "../images/icon-bookmark.svg";
import Pledges2 from './Pledges2'
import 'antd/dist/antd.css';

class Section1 extends React.Component {

    state = {
        isAddModalVisible: false
    };

    showModal = () => {
        console.log("ans");
        this.setState({ isAddModalVisible: true });
    };

    handleOk = () => {
        this.setState({ isAddModalVisible: false });
    };

    handleCancel = () => {
        this.setState({ isAddModalVisible: false });
    };

    render() {
        return (
            <>
                <Modal
                    title={null}
                    footer={null}
                    visible={this.state.isAddModalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    width={750}
                >
                    <div>
                        <div>
                            <h2 className="font-bold text-xl">Back this project</h2>
                            <p className="text-gray-600"> Want to support us in bringing Mastercraft Bamboo Monitor Riser out in the world?</p>
                        </div>
                        <Pledges2 closeModal={this.handleCancel} val={0}/>
                    </div>
                </Modal>

                <section className="relative bg-white mx-5 px-5 rounded-lg -mt-20 pb-10 border-2 lg:w-2/3 lg:mx-auto">
                    <img src={mastercraft} alt="" className="mastercraft" />
                    <div className="pt-10 pb-3">
                        <h2 className="text-center font-bold text-xl pb-2">Mastercraft Bamboo Monitor Riser</h2>
                        <p className="text-center">A beautiful & handcrafted monitor stand to reduce neck and eye strain.</p>
                    </div>

                    <div className="flex justify-between">
                        <button className="btn rounded-full py-1 px-6 text-white" onClick={this.showModal}>Back this project</button>
                        <img src={bookmark} alt="" />
                    </div>
                </section>
            </>
        )
    }
}

export default Section1