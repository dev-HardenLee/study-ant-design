import React from 'react';
import {FloatButton} from "antd";
import {QuestionCircleOutlined, SyncOutlined} from "@ant-design/icons";

const FloatButtonsPage = () => {
    return (
        <>
            <FloatButton onClick={() => console.log('onClick')} style={{right: 30}}/>
            <FloatButton icon={<QuestionCircleOutlined />} type="primary" style={{ right: 80 }} />
            <FloatButton icon={<QuestionCircleOutlined />} type="default" style={{ right: 130 }} />

            <FloatButton.Group shape="circle" style={{ right: 180 }}>
                <FloatButton icon={<QuestionCircleOutlined />} />
                <FloatButton />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
            <FloatButton.Group shape="square" style={{ right: 240 }}>
                <FloatButton icon={<QuestionCircleOutlined />} />
                <FloatButton />
                <FloatButton icon={<SyncOutlined />} />
                <FloatButton.BackTop visibilityHeight={0} />
            </FloatButton.Group>
        </>
    );
};

export default FloatButtonsPage;