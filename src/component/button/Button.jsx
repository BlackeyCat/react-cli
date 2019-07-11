// 引入库
// 复制粘贴

import React, { Component } from 'react';
// 引入样式
import './button.less';

// 定义类并暴露接口
export default class Button extends Component {
	// 渲染
	render() {
		// 解构属性
		let { href, children, block, type, className, onClick } = this.props;
		// console.log(this.props)
		// 在外部处理类，处理完成，再给按钮添加
		let cls = [
			// 命名空间
			'ickt-button',
			// 如果是块元素
			block ? 'btn-block' : '',
			// 类型
			'btn-' + type,
			// 用户自定义类
			className
		]
		// 如果有href说明要渲染成a标签
		if (href) {
			// 可以定义默认事件回调函数，还可以在执行的时候，判断，是否传递了事件回调函数
			return <a className={cls.join(' ')} onClick={e => onClick && onClick(e)} href={href}>{children}</a>
		} else {
			// 否则渲染成span
			return <span className={cls.join(' ')} onClick={e => onClick && onClick(e)}>{children}</span>
		}
	}
}

// 默认属性数据
Button.defaultProps = {
	type: 'default'
}