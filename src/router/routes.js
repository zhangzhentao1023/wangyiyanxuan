import Category from '../pages/Category/Category.vue'
import Home from '../pages/Home/Home.vue'
import Personal from '../pages/Personal/Personal.vue'
import Shopping from '../pages/Shopping/Shopping.vue'
import Things from '../pages/Things/Things.vue'
import NoteLogin from '../pages/Personal/NoteLogin/NoteLogin.vue'
import PhoneLogin from '../pages/Personal/PhoneLogin/PhoneLogin.vue'
export default[
    { path: '/home', 
    component: Home,
    meta: { 
      Footer:true
     }
    },
    { path: '/category', 
    component: Category,
    meta: { 
      Footer:true
     } 
    },
    { path: '/things', 
    component: Things,
    meta: { 
      Footer:true
     } 
    },
    { path: '/shopping', 
    component: Shopping,
    meta: { 
      Footer:true
     } 
    },
    { path: '/personal', 
    component: Personal,
    children:[
      {path: '/personal/notelogin',
      component: NoteLogin
      },
      {path: '/personal/phonelogin',
      component: PhoneLogin
      },
    ]
    },
    { // 当访问根路径自动重定向到/Home
        path: '/',
        redirect: '/Home'
      }
]