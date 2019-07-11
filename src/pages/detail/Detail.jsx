// 引入React
import React, { Component } from 'react';
// 引入组件按钮
import Button from '../../component/button/Button';
// 引入axios
import axios from 'axios';
// 引入样式
import './Detail.less';

// 定义组件
export default class Detail extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 状态
		this.state = {
			data: {}
		}
	}
	// 请求数据 组件创建前
	componentWillMount() {
		this.getData();
	}
	// 👇复制粘贴
	// 存在期要更新数据
	// componnetWillReceiveProps() {}
	// getData方法要获取新的属性数据，因此要在组件更新后请求数据
	componentDidUpdate(oldPorps, oldState) {
		// 属性更新的时候，我们执行
		if (this.props.match.params.id !== oldPorps.match.params.id) {
			// 更新数据
			this.getData();
		}
	}
	// 👆复制粘贴

	showComment() {
		// 通过loacation.hash 来跳转
		// window.location.hash = '#/comments/' + this.props.match.params.id
		this.props.history.push('/comments/'+ this.props.match.params.id)
	}
	// 定义请求数据方法
	getData() {
		let { params } = this.props.match;
		axios.get("/data/detail.json", { params })
			.then(({ data }) => this.setState({ data }))
	}
	// 渲染
	render() {
		// 解构data
		let { data } = this.state;
		return (
			<div className="page-detail">
				<h1>{data.title}</h1>
				<p className="status">
					<span className="time">{data.time}</span>
					<span className="comments">{'评论：'+ data.comment}</span>
				</p>
				<img src={data.img} alt=""/>
				<p className="content" dangerouslySetInnerHTML={{ __html: data.content}}></p>
				{/*<Button className="btn" type='info' block href={'#/comments/' + data.id}>查看更多评论</Button>*/}
				<Button className="btn" type='info' block onClick={e => this.showComment()}>查看更多评论</Button>
			</div>
		)
	}
}