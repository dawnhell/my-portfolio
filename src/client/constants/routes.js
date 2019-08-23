import Home from '../components/Home/Home'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Contact from '../components/Contact/Contact'

export default {
  pages: [
    {
      title: 'Home',
      path: '/home',
      component: Home,
    },
    {
      title: 'About',
      path: '/about',
      component: About,
    },
    {
      title: 'Projects',
      path: '/projects',
      component: Projects,
    },
    {
      title: 'Contact',
      path: '/contact',
      component: Contact,
    },
  ],
}
