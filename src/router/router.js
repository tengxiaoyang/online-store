import App from '../page/home'

export default [{
  path: '/',
  component: App,
  children: [{
    path: '',
    component: r => require.ensure([], () => r(require('../page/home')), 'home')
  }]
}, 
{
  path: '/item',
  component: r => require.ensure([], () => r(require('../page/item')), 'item')
}, 
{
  path: '/change_city',
  component: r => require.ensure([], () => r(require('../page/change_city')), 'change_city')
}, 
{
  path: '/more_city',
  component: r => require.ensure([], () => r(require('../page/more_city')), 'more_city')
}, 
// {
//   path: '/search',
//   component: r => require.ensure([], () => r(require('../page/search')), 'search')
// }, 
// {
//   path: '/more',
//   component: r => require.ensure([], () => r(require('../page/more')), 'more')
// }, {
//   path: '/download',
//   component: r => require.ensure([], () => r(require('../page/download')), 'download')
// }
]

