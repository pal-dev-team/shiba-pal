// routes
import { PATH_PAGE } from '../../routes/paths';
// components
import SvgIconStyle from '../../components/SvgIconStyle';

// ----------------------------------------------------------------------

const getIcon = (name: string) => (
  <SvgIconStyle src={`/static/icons/navbar/${name}.svg`} sx={{ width: '100%', height: '100%' }} />
);

const ICONS = {
  blog: getIcon('ic_blog'),
  cart: getIcon('ic_cart'),
  chat: getIcon('ic_chat'),
  mail: getIcon('ic_mail'),
  user: getIcon('ic_user'),
  calendar: getIcon('ic_calendar'),
  ecommerce: getIcon('ic_ecommerce'),
  analytics: getIcon('ic_analytics'),
  dashboard: getIcon('ic_dashboard'),
  kanban: getIcon('ic_kanban')
};

const sidebarConfig = [
  {
    subheader: '',
    items: [
      { title: 'home', path: PATH_PAGE.home, icon: ICONS.dashboard },
      { title: 'collections', path: PATH_PAGE.collections, icon: ICONS.ecommerce },
      { title: 'stake', path: PATH_PAGE.stake, icon: ICONS.analytics }
    ]
  }
];

export default sidebarConfig;
