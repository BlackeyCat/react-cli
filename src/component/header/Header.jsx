// 引入库
import React, { Component } from 'react';
// 引入样式
import './Header.less';
// 暴露
export default class Header extends Component {
	render() {
		// 解构属性
		let { title, rightContent, onRightClick, children } = this.props;
		return (
			<div className="ickt-header">
				<div className="go-back">
					<span className="arrow">
						<span className="arrow blue"></span>
					</span>
				</div>
				<h1>{children || title}</h1>
				<div className="right-btn" onClick={onRightClick}>{rightContent}</div>
			</div>
		)
	}
}
// 默认属性数据
Header.defaultProps = {
	title: '',
	rightContent: '',
	onRightClick: () => {}
}