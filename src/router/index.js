import Vue from 'vue'
import VueRouter from 'vue-router'
// import Doculentation from '../components/AppDocumentation'
import Presentation from '../views/Presentation.vue'
// import Home from '../views/admin/Home.vue'
import Dashbord from '../views/admin/Dashbord.vue'
import Administration from '../views/admin/administrations/Administration.vue'
import CreateAdministration from '../views/admin/administrations/Creer.vue'
import About from '../views/admin/About.vue'
import Settings from '../views/admin/Settings.vue'
import LoginContribuable from '../components/contribuable/login.vue'
import LoginAdmin from '../components/admin/Login.vue'
import AdminProfile from '../components/admin/Profiles.vue'

Vue.use(VueRouter)

const routes = [
  // { path: '/documentation', component: Doculentation },
  { path: '/admin', name:Dashbord, component: Dashbord },
  { path: '/admin/profile', name:AdminProfile, component: AdminProfile },
  { path: '/dashbord', name:Dashbord, component: Dashbord },
  { path: '/administration', name:Administration, component: Administration },
  { path: '/administration/create', name:CreateAdministration, component: CreateAdministration },
  { path: '/admin/login', name:LoginAdmin, component: LoginAdmin },
  { path: '/about', name:About, component: About },
  { path: '/paramettres', name:Settings, component: Settings },
  { path: '/', component: Presentation },
  { path: '/contribuable/login', component: LoginContribuable },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
