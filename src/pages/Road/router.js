// router
import Loadable from 'react-loadable'
import MyLoadingComponent from '../../components/LoadingComponent'

const Road = Loadable({
	loader: () => import('./index'),
	loading: MyLoadingComponent
})

const router = [
	{
		path: '/road',
		name: 'road',
		meta: {
			title: '路'
		},
		component: Road
	}
]

export default router
