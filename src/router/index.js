import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/* Router Modules */
import tableRouter from './modules/table'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'Dashboard',
        meta: { title: '主页', icon: 'dashboard', affix: true }
      }
    ]
  }, {
    path: '/',
    component: Layout,
    redirect: '/user-index',
    children: [
      {
        path: 'user-index',
        component: () => import('@/views/customer/index'),
        name: 'Dashboard',
        meta: { title: '客户页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/complex-table',
    children: [
      {
        path: 'complex-table',
        component: () => import('@/views/table/complex-table'),
        name: 'ComplexTable',
        meta: { title: '订单管理', icon: 'dashboard' }
      }
    ]
  }, {
    path: '/',
    component: Layout,
    redirect: '/package',
    children: [
      {
        path: 'package-table',
        component: () => import('@/views/table/package-table'),
        name: 'ComplexTable',
        meta: { title: '快递信息', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/user-table',
    children: [
      {
        path: 'user-table',
        component: () => import('@/views/table/user-table'),
        name: 'ComplexTable',
        meta: { title: '客户管理', icon: 'dashboard' }
      }
    ]
  },
  {
    path: '/',
    component: Layout,
    redirect: '/transport-table',
    children: [
      {
        path: 'transport-table',
        component: () => import('@/views/table/transport-table'),
        name: 'ComplexTable',
        meta: { title: '集运管理', icon: 'dashboard' }
      }
    ]
  }, {
    path: '/',
    component: Layout,
    redirect: '/warehouse-table',
    children: [
      {
        path: 'warehouse-table',
        component: () => import('@/views/table/warehouse-table'),
        name: 'ComplexTable',
        meta: { title: '仓库管理', icon: 'dashboard' }
      }
    ]
  }, {
    path: '/',
    component: Layout,
    redirect: '/warehouse-log-table',
    children: [
      {
        path: 'warehouse-log-table',
        component: () => import('@/views/table/warehouseLog-table'),
        name: 'ComplexTable',
        meta: { title: '出入库记录', icon: 'dashboard' }
      }
    ]
  },

  {
    path: '/profile',
    component: Layout,
    redirect: '/profile/index',
    hidden: true,
    children: [
      {
        path: 'index',
        component: () => import('@/views/profile/index'),
        name: 'Profile',
        meta: { title: 'Profile', icon: 'user', noCache: true }
      }
    ]
  },
  // tableRouter,

  // {
  //   path: '/error',
  //   component: Layout,
  //   redirect: 'noRedirect',
  //   name: 'ErrorPages',
  //   meta: {
  //     title: 'Error Pages',
  //     icon: '404'
  //   },
  //   children: [
  //     {
  //       path: '401',
  //       component: () => import('@/views/error-page/401'),
  //       name: 'Page401',
  //       meta: { title: '401', noCache: true }
  //     },
  //     {
  //       path: '404',
  //       component: () => import('@/views/error-page/404'),
  //       name: 'Page404',
  //       meta: { title: '404', noCache: true }
  //     }
  //   ]
  // },
  //

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
// export const asyncRoutes = [
//   {
//     path: '/permission',
//     component: Layout,
//     redirect: '/permission/page',
//     alwaysShow: true, // will always show the root menu
//     name: 'Permission',
//     meta: {
//       title: 'Permission',
//       icon: 'lock',
//       roles: ['admin', 'editor'] // you can set roles in root nav
//     },
//     children: [
//       {
//         path: 'page',
//         component: () => import('@/views/permission/page'),
//         name: 'PagePermission',
//         meta: {
//           title: 'Page Permission',
//           roles: ['admin'] // or you can only set roles in sub nav
//         }
//       },
//       {
//         path: 'directive',
//         component: () => import('@/views/permission/directive'),
//         name: 'DirectivePermission',
//         meta: {
//           title: 'Directive Permission'
//           // if do not set roles, means: this page does not require permission
//         }
//       },
//       {
//         path: 'role',
//         component: () => import('@/views/permission/role'),
//         name: 'RolePermission',
//         meta: {
//           title: 'Role Permission',
//           roles: ['admin']
//         }
//       }
//     ]
//   },
//
//   /** when your routing map is too long, you can split it into small modules **/
//   // componentsRouter,
//   // chartsRouter,
//   // nestedRouter,
//   tableRouter,
//
//
//
//
//   // {
//   //   path: '/error',
//   //   component: Layout,
//   //   redirect: 'noRedirect',
//   //   name: 'ErrorPages',
//   //   meta: {
//   //     title: 'Error Pages',
//   //     icon: '404'
//   //   },
//   //   children: [
//   //     {
//   //       path: '401',
//   //       component: () => import('@/views/error-page/401'),
//   //       name: 'Page401',
//   //       meta: { title: '401', noCache: true }
//   //     },
//   //     {
//   //       path: '404',
//   //       component: () => import('@/views/error-page/404'),
//   //       name: 'Page404',
//   //       meta: { title: '404', noCache: true }
//   //     }
//   //   ]
//   // },
//   //
//
//
//
//
//
//
//
//   // 404 page must be placed at the end !!!
//   { path: '*', redirect: '/404', hidden: true }
// ]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
