// router
import Loadable from 'react-loadable';
import MyLoadingComponent from '../../components/LoadingComponent'

const Wind = Loadable({
    loader: () => import('./index'),
    loading: MyLoadingComponent
});

export default [{
  path: '/',
  name: 'wind',
  exact: true,
  meta: {
    title: '风'
  },
  component: Wind
}]
