import React, { useState } from 'react'
import { Button, Divider, Flex, Radio, Tooltip } from 'antd'
import { DownloadOutlined, PoweroffOutlined, SearchOutlined } from '@ant-design/icons'
import { ConfigProviderProps } from 'antd'


const boxStyle: React.CSSProperties = {
    width: '100%',
    height: '100vh',
    padding: '10vh',
    overflowY: 'scroll'
}

type SizeType = ConfigProviderProps['componentSize']

const ButtonPage = () => {

    const [size, setSize] = useState<SizeType>('large')
    const [loadings, setLoadings] = useState<boolean[]>([false, false, false])

    const enterLoading = (index: number) => {
        setLoadings((prevState) => {
            const newLoadings = [...prevState]

            newLoadings[index] = true

            return newLoadings
        })

        setTimeout(() => {
            setLoadings((prevState) => {
                const newLoadings = [...prevState]

                newLoadings[index] = false

                return newLoadings
            })
        }, 5000)
    }// enterLoading

    return (
        <div style={boxStyle}>

            {/* 일반 버튼 */}
            <Flex gap="small" wrap="wrap" justify={"center"} align={'center'}>
                <Button type="primary">Primary Button</Button>
                <Button>Default Button</Button>
                <Button type="dashed">Dashed Button</Button>
                <Button type="text">Text Button</Button>
                <Button type="link">Link Button</Button>
            </Flex>

            <Divider dashed={true}/>

            {/* 버튼 사이즈 */}
            <Flex gap="small" wrap="wrap" vertical={true} align={'center'}>
                <Radio.Group value={size} onChange={(e) => setSize(e.target.value)}>
                    <Radio.Button value="large">Large</Radio.Button>
                    <Radio.Button value="default">Default</Radio.Button>
                    <Radio.Button value="small">Small</Radio.Button>
                </Radio.Group>

                <Flex gap="small" align="flex-start" vertical>
                    <Flex gap="small" wrap="wrap">
                        <Button type="primary" size={size}>
                            Primary
                        </Button>
                        <Button size={size}>Default</Button>
                        <Button type="dashed" size={size}>
                            Dashed
                        </Button>
                    </Flex>
                    <Button type="link" size={size}>
                        Link
                    </Button>
                    <Flex gap="small" wrap="wrap">
                        <Button type="primary" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="circle" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size} />
                        <Button type="primary" shape="round" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                        <Button type="primary" icon={<DownloadOutlined />} size={size}>
                            Download
                        </Button>
                    </Flex>
                </Flex>
            </Flex>

            <Divider dashed={true}/>

            {/* 아이콘 버튼 */}
            <Flex gap="small" vertical justify={"center"} align={'center'}>
                <Flex wrap="wrap" gap="small">
                    <Tooltip title="search">
                        <Button type="primary" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="primary" shape="circle">
                        A
                    </Button>
                    <Button type="primary" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                </Flex>
                <Flex wrap="wrap" gap="small">
                    <Tooltip title="search">
                        <Button shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button icon={<SearchOutlined />}>Search</Button>
                    <Tooltip title="search">
                        <Button type="dashed" shape="circle" icon={<SearchOutlined />} />
                    </Tooltip>
                    <Button type="dashed" icon={<SearchOutlined />}>
                        Search
                    </Button>
                    <Button icon={<SearchOutlined />} href="/buttons" />
                </Flex>
            </Flex>

            <Divider dashed={true}/>

            {/* 버튼 로딩 */}
            <Flex gap="small" vertical justify={"center"} align={'center'}>
                <Flex gap="small" align="center" wrap="wrap">
                    <Button type="primary" loading>
                        Loading
                    </Button>
                    <Button type="primary" size="small" loading>
                        Loading
                    </Button>
                    <Button type="primary" icon={<PoweroffOutlined />} loading />
                </Flex>
                <Flex gap="small" wrap="wrap">
                    <Button type="primary" loading={loadings[0]} onClick={() => enterLoading(0)}>
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[1]}
                        onClick={() => enterLoading(1)}
                    >
                        Click me!
                    </Button>
                    <Button
                        type="primary"
                        icon={<PoweroffOutlined />}
                        loading={loadings[2]}
                        onClick={() => enterLoading(2)}
                    />
                </Flex>
            </Flex>

            <Divider dashed={true}/>

            {/* 버튼 비활성화 */}
            <Flex gap="small" align="center" justify={"center"} vertical>
                <Flex gap="small" align="center" justify={"center"}>
                    <Button type="primary">Primary</Button>
                    <Button type="primary" disabled>
                        Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button>Default</Button>
                    <Button disabled>Default(disabled)</Button>
                </Flex>
                <Flex gap="small">
                    <Button type="dashed">Dashed</Button>
                    <Button type="dashed" disabled>
                        Dashed(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="text">Text</Button>
                    <Button type="text" disabled>
                        Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link">Link</Button>
                    <Button type="link" disabled>
                        Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="primary" href="https://ant.design/index-cn">
                        Href Primary
                    </Button>
                    <Button type="primary" href="https://ant.design/index-cn" disabled>
                        Href Primary(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button >Danger Default</Button>
                    <Button danger disabled>
                        Danger Default(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button danger type="text">
                        Danger Text
                    </Button>
                    <Button danger type="text" disabled>
                        Danger Text(disabled)
                    </Button>
                </Flex>
                <Flex gap="small">
                    <Button type="link" danger>
                        Danger Link
                    </Button>
                    <Button type="link" danger disabled>
                        Danger Link(disabled)
                    </Button>
                </Flex>
                <Flex gap="small" className="site-button-ghost-wrapper">
                    <Button ghost>Ghost</Button>
                    <Button ghost disabled>
                        Ghost(disabled)
                    </Button>
                </Flex>
            </Flex>

            <Divider dashed={true}/>

            {/* block button */}
            <Flex vertical gap="small" style={{ width: '60vh', margin: 'auto' }} align={"center"} justify={"center"}>
                <Button type="primary" block>
                    Primary
                </Button>
                <Button block>Default</Button>
                <Button type="dashed" block>
                    Dashed
                </Button>
                <Button disabled block>
                    disabled
                </Button>
                <Button type="text" block>
                    text
                </Button>
                <Button type="link" block>
                    Link
                </Button>
            </Flex>

        </div>
    )
}

export default ButtonPage








