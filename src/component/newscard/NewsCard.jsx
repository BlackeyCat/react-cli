// 引入库
// 复制粘贴

import React, { Component } from 'react';
// 引入组件
import { Link } from 'react-router-dom';
// 引入样式
import './NewsCard.less';

// 定义类并暴露接口
export default class NewsCard extends Component {
	// 渲染
	render() {
		// console.log(this.props)
		// 解构数据
		let { data } = this.props;
		return (
			<div className="ickt-newscard">
				<Link to={'/detail/' + data.id} className="container">
					<img src={data.img} alt=""/>
					<div className="content">
						<h2>{data.title}</h2>
						<p>
							<span>{data.content}</span>
							<span className="comments">{'评论:' + data.comment}</span>
						</p>
					</div>
				</Link>
			</div>
		)
	}
}
// 默认属性数据
NewsCard.defaultProps = {
	data: {}
}