// 引入React
// 复制粘贴
import React, { Component } from 'react';
// 引入组件
import NewsCard from '@/component/newscard/NewsCard';
import PageHeader from '@/component/lib/PageHeader';
import { NavLink } from 'react-router-dom'
// 引入api
import { getNewsList } from '@/api/newsList'

// 定义组件
export default class Home extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			data: []
		}
	}
		// 请求数据
		componentWillMount() {
            // 发送get
			getNewsList('/data/list.json')
            	.then(({ data }) => this.setState({ data }))
		}
		// 渲染列表
		createList() {
			// 遍历data数据
			return this.state.data.map((item, index) =><NewsCard key={index} data={item}></NewsCard>)
		}
	// 渲染
	render() {
        // return <div>{this.createList()}</div>
		return (
            <div>
                {/* <PageHeader closeBrowser={true} title={'首页'}></PageHeader> */}
				<br/>
				<br/>
				<br/>
				<br/>
				<br/>
                <div className="list">
                    <div className="list-row box box-pack-center">
                        <NavLink to="/page-a">Link-To-PageA</NavLink>
                    </div>
                    <div className="list-row box box-pack-center">
                        <NavLink to="/page-b">Link-To-PageB</NavLink>
                    </div>
                    <div className="list-row box box-pack-center">
                        <NavLink to="/page-c">Link-To-PageC</NavLink>
                    </div>
                </div>

                <div className="App">
                    Hi React
                </div>
                <div>{this.createList()}</div>
            </div>
        )
        
	}
}