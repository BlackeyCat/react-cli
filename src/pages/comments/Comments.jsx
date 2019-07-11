// 引入React
import React, { Component } from 'react';
// 引入组件
import Button from '../../component/button/Button';
// 引入组件
import DiscussCard from '../../component/discusscard/DiscussCard';
// 引入异步请求库
import axios from 'axios';
// 引入样式
import './Comments.less';

// 定义组件
export default class Comments extends Component {
	// 构造函数
	constructor(props) {
		super(props);
		// 初始化状态
		this.state = {
			list: [],
			id: 0,
			// 用户输入的内容
			userInput: ''
		}
	}
	// 组件创建前请求数据
	componentWillMount() {
		// 更新数据
		this.getData();
	}
	// 等到属性数据更新，我们请求数据
	componentDidUpdate(oldProps, oldState) {
		// 判断id更新了
		if (this.props.match.params.id !== oldProps.match.params.id) {
			// 更新数据
			this.getData();
		}
	}
	// 封装获取数据的方法
	getData() {
		// 解构数据
		let { params } = this.props.match;
		// 请求数据
		axios.get('/data/comment.json', { params })
			// 数据返回。存储数据
			// .then(({ data }) => this.setState({  
			// 	list: data.list,
			// 	id: data.id
			// }))
			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~👇👇👇👇👇👇👇👇👇看视频了解 并且记录在笔记
			.then(({ data }) => this.setState(data))
			// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~👇👇👇👇👇👇👇👇👇
	}
	// 渲染评论卡片
	createList() {
		// 遍历数据
		return this.state.list.map((item, index) => <DiscussCard key={index} data={item}></DiscussCard>)
	}
	// 处理时间
	dealTime(time) {
		// 小于0要补0
		return time < 10 ? '0' + time : time
	}
	// 点击提交按钮，提交评论
	sendMessage() {
		// 获取约束性组件数据，从状态中获取
		// console.log(this.state.userInput)
		let { userInput, list } = this.state;
		// 提交的数据必须存在
		if (/^\s*$/.test(userInput)) {
			// 提示用户，并终止执行
			alert('请输入内容');
			return;
		}
		// 获取当前时间
		let date = new Date();
		// 定义提交的数据
		let sendData = {
			user: '雨夜清荷',
			content: userInput,
			time: `刚刚 ${date.getHours()}:${this.dealTime(date.getMinutes())}:${this.dealTime(date.getSeconds())}`
		}
		// 发送请求
		// axios.post('/data/addComment.json', sendData)
		axios.get('/data/addComment.json', {
			params: sendData
		})
			// 监听数据返回
			.then(({ data }) => {
				// 如果请求成功
				if (data.errno === 0) {
					// list插入数据
					// 后面插入
					// list.push(sendData)
					// 前面插入
					list.unshift(sendData);
					// 更新数据
					this.setState({
						list,
						// 更新约束性组件的数据，就是更新状态数据
						userInput: ''
					})

				}
			})
	}
	// 渲染
	render() {
		return (
			<div className="page-comments">
				<div className="user-input">
					{/*非约束性组件，约束性*/}
					<textarea value={this.state.userInput} onChange={e => this.setState({ userInput: e.target.value })} placeholder="文明上网，理性发言！"></textarea>
					<Button type="info" onClick={e => this.sendMessage()}>提交</Button>
				</div>
				{/*渲染评论*/}
				<div className="discuss">{this.createList()}</div>
			</div>
		)
	}
}