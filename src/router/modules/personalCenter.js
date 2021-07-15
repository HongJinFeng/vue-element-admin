/** When your routing table is too long, you can split it into small modules **/

import Layout from '@/layout'

const personalCenterRouter = {
  path: '/personal-center',
  component: Layout,
  redirect: 'noRedirect',
  name: 'PersonCenter',
  meta: {
    title: 'personalCenter',
    icon: 'people'
  },
  children: [
    {
      path: 'personal-detail',
      component: () => import('@/views/profile/index'),
      name: 'personalDetail',
      meta: { title: 'personalDetail' }
    },
    {
      path: 'avatar-upload',
      component: () => import('@/views/components-demo/avatar-upload'),
      name: 'AvatarUploadDemo',
      meta: { title: 'avatarUpload' }
    }
  ]
}

export default personalCenterRouter
