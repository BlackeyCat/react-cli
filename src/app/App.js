import React, {Component} from 'react';
import {Route, Switch, NavLink, Redirect, withRouter, Link} from 'react-router-dom'
import Loadable from 'react-loadable';
import PageA from '../component/PageA';
import PageB from '../component/PageB';
import PageC from '../component/PageC';
import home from '../pages/home/home'
import Detail from '../pages/detail/Detail';
import Comments from '../pages/comments/Comments';
import Header from '../component/header/Header';

import PageHeader from '../component/lib/PageHeader';
import AnimatedRouter from 'react-animated-router'; //我们的AnimatedRouter组件
import 'react-animated-router/animate.css'; //引入默认的动画样式定义
import '../style/lib/reset.css';
import '../style/lib/common.css';
import '../style/lib/pageheader.css';
import './App.css';
const homePage = Loadable({
	loader: () => import('../pages/home/home'),
	loading: home
})
const PageAComponent = Loadable({
	loader: () => import('../component/PageA'),
	loading: PageA,
});
const PageBComponent = Loadable({
	loader: () => import('../component/PageB'),
	loading: PageB,
});
const PageCComponent = Loadable({
	loader: () => import('../component/PageC'),
	loading: PageC,
});

class App extends Component {
	render() {
		return (
			<div>
				<Header title='腾讯体育' rightContent='登录' onRightClick={e => alert('无法登陆')}></Header>
				<AnimatedRouter>
					<Route path='/' exact component={homePage}></Route>
					<Route path='/home' component={homePage}></Route>
					<Route path="/detail/:id" component={Detail}></Route>
            		<Route path="/comments/:id" component={Comments}></Route>
					<Route path='/page-a' component={PageAComponent}></Route>
					<Route path='/page-b' component={PageBComponent}></Route>
					<Route path='/page-c' component={PageCComponent}></Route>
					<Redirect to={{
						pathname: '/',
						search: '?utm=your+face'
					}}/>
				</AnimatedRouter>

			</div>
		);
	}
}

export default withRouter(App);
