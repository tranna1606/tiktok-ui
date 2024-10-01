import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    faCircleQuestion,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faSignOut,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import routesConfig from '~/config/routes';
import { InboxIcon, MessageIcon,  UploadIcon } from '~/components/Icons';
import Image from '~/components/Image'
import Search from '../Search';
import { Link } from 'react-router-dom';
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ],
        },
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback',
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
    },
];

const userMenu = [
    {
        icon: <FontAwesomeIcon icon={faUser} />,
        title: 'View Profile',
        to: '/@hoaa',
    },
    {
        icon: <FontAwesomeIcon icon={faCoins} />,
        title: 'Get Coins',
        to: '/coin',
    },
    {
        icon: <FontAwesomeIcon icon={faGear} />,
        title: 'Settings',
        to: '/settings',
    },
    ...MENU_ITEMS,
    {
        icon: <FontAwesomeIcon icon={faSignOut} />,
        title: 'Log out',
        to: '/logout',
        seperate: true
    },
]
const handleMenuChange =(MenuItem) => {
    console.log(MenuItem)
}

function Header() {
    const cx = classNames.bind(styles);
    const currentUser = true;
    
   
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <Link to={routesConfig.home} className = {cx('logo-link')}><img src={images.logo} alt="tiktok" /></Link>
                  
                </div>
                {/* Search */}
                <Search />
                
                <div className={cx('actions')}>
                   {currentUser ? (
                        <>
                       <Tippy delay={[0,500]} content="Upload Video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <UploadIcon />
                            </button >
                       </Tippy>
                       <Tippy delay={[0,500]} content="Message" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <MessageIcon />
                            </button >
                       </Tippy>
                       <Tippy delay={[0,500]} content="Inbox" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <InboxIcon />
                                <span className={cx('badge')}>12</span>
                            </button >
                       </Tippy>
                        {/* <button className={cx('action-btn')}>
                            <FontAwesomeIcon icon={faMessage} />
                        </button> */}
                        </>
                   ) : (
                    <>
                      <Button text>Upload</Button>
                      <Button primary>Log in</Button>
                    </>
                  
                   )}
                    <Menu items = {currentUser ? userMenu : MENU_ITEMS} onChange ={handleMenuChange}>
                        {currentUser ? (
                            <HeadlessTippy>
                            <Image
                            
                            src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ac9729124ec66a862daeba984c0a37f0.jpeg?lk3s=a5d48078&nonce=4949&refresh_token=9f2f2bf5b44018bee1ebca9a93ef4ed5&x-expires=1726887600&x-signature=2B8zRuPiiJoxsj%2Fcofp9fjCEax4%3D&shp=a5d48078&shcp=81f88b70' 
                            alt='Nguyen Van A' 
                            className= {cx('user-avatar')}
                            fallback= 'https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png'
                            />
                            </HeadlessTippy>
                        ):(
                            <>
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical} />
                            </button>
                            </>
                        )}
                        
                    </Menu>
                  
                </div>
            </div>
        </header>
    );
}

export default Header;
