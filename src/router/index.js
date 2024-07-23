import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const originalPush = VueRouter.prototype.push
// 解决导航栏中的vue-router在3.0版本以上重复点菜单报错问题
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: "/",
        redirect: "/home"
    },
    {
        path: "/dashboard",
        component: () => import('@/views/dashboard/index.vue'),
        name: "dashboard",
        meta: {
            title: 'dashboard'
        },
        redirect: {name: "home"},
        children: [
            {
                path: "/home",
                component: () => import('@/views/home'),
                name: "home",
                meta: {
                    title: 'home'
                }
            },
            {
                path: "/sessions",
                component: () => import('@/views/sessions'),
                name: "sessions",
                meta: {
                    title: 'sessions'
                }
            },
            {
                path: "/sessions/sessionsDetail",
                component: () => import('@/views/sessions/detail'),
                name: "sessionsDetail",
                meta: {
                    title: 'sessionsDetail'
                }
            },
            {
                path: "/tutors",
                component: () => import('@/views/tutors'),
                name: "tutors",
                meta: {
                    title: 'tutors'
                }
            },
            {
                path: "/tutors/tutorDetail",
                component: () => import('@/views/tutors/detail'),
                name: "tutorDetail",
                meta: {
                    title: 'tutorDetail'
                }
            }

        ]
    },
    // {
    //     path: "/center",
    //     name: 'center',
    //     component: () => import('@/views/center/index.vue'),
    //     redirect: {name: "basic"},
    //     children: [
    //         {
    //             path: "/basic",
    //             component: () => import('@/views/personal/basic.vue'),
    //             name: "basic",
    //             meta: {
    //                 title: '用户信息'
    //             }
    //         }
    //     ]
    // },
    {
        path: "/404",
        component: () => import('@/views/not_found/notFound.vue'),
        name: "notFound",
        meta: {
            title: '页面未找到'
        }
    },
    {
        path: "*",
        redirect: "/404"
    }
];

const router = new VueRouter({
    routes
});


router.beforeEach((to, from, next) => {
    if (to.path === from.path) {
        next(false);
    } else {
        document.title = to.meta.title;
        next();
    }
})


export default router;