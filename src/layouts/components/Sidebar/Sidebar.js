import config from '~/config';
import styles from './Sidebar.module.scss';
import classNames from 'classnames/bind';
import Menu, {MenuItem} from '~/layouts/components/Sidebar/Menu'
import { HomeIcon,UserGroupIcon,LiveIcon } from '~/components/Icons';
import { HomeActiveIcon,UserGroupActiveIcon,LiveActiveIcon } from '~/components/Icons';
import SuggestAccounts from '~/components/SuggestAccounts';
const cx = classNames.bind(styles);
function SideBar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title= "For You" to={config.routes.home} icon={<HomeIcon />} activeIcon = {<HomeActiveIcon />}/>
                <MenuItem title= "Following" to={config.routes.following} icon={<UserGroupIcon />} activeIcon = {<UserGroupActiveIcon />}/>
                <MenuItem title= "LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon = {<LiveActiveIcon />}/>
            </Menu>

            <SuggestAccounts  label='Suggested accounts'/>
            <SuggestAccounts  label='Following accounts'/>
        </aside>
    );
}

export default SideBar;
