// router
import Loadable from 'react-loadable';
import MyLoadingComponent from '../../components/LoadingComponent';

const Winter = Loadable({
	loader: () => import('./index'),
	loading: MyLoadingComponent
});

export default [
	{
		path: '/winter',
		name: 'winter',
		meta: {
			title: ''
		},
		component: Winter
	}
];
