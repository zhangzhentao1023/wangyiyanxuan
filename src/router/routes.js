import Category from '../pages/Category/Category.vue'
import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Things from '../pages/Things/Things.vue'

export default[
    { path: '/home', 
    component: Home 
    },
    { path: '/category', 
    component: Category 
    },
    { path: '/things', 
    component: Things 
    },
    { path: '/shopping', 
    component: Shopping 
    },
    { path: '/personal', 
    component: Personal 
    },
    { // 当访问根路径自动重定向到/Home
        path: '/',
        redirect: '/Home'
      }
]