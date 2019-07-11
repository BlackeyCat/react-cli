// 引入库
import React, { Component } from 'react';
// 引入样式
import './DiscussCard.less';

// 定义类并暴露接口
export default class DiscussCard extends Component {
	// 渲染
	render() {
		// 解构数据
		let { data } = this.props;
		return (
			<div className="ickt-discuss-card">
				<h3>{data.user}</h3>
				<p>{data.content}</p>
				<span>{data.time}</span>
			</div>
		)
	}
}
// 默认属性数据
DiscussCard.defaultProps = {
	data: {}
}