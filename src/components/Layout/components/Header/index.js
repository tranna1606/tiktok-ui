import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';
import { Wrapper as PopperWrapper } from '~/components/Popper';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import {
    faCircleQuestion,
    faCircleXmark,
    faCloudUpload,
    faCoins,
    faEarthAsia,
    faEllipsisVertical,
    faGear,
    faKeyboard,
    faMagnifyingGlass,
    faMessage,
    faSignIn,
    faSignOut,
    faSpinner,
    faUpload,
    faUser,
} from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import AccountItem from '~/components/AccountItem';
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
                },
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
    const [searchResult, setSearchResult] = useState([]);
    const cx = classNames.bind(styles);
    const currentUser = true;
    useEffect(() => {
        setTimeout(() => {
            setSearchResult([]);
        }, 0);
    }, []);
   
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="tiktok" />
                </div>
                <HeadlessTippy
                    delay={[0,100]}
                    interactive={true} //để có thể click vào
                    visible={searchResult.length > 0}
                    render={(attrs) => (
                        <div
                            className={cx('search-results')}
                            tabIndex="-1"
                            {...attrs}
                        >
                            <PopperWrapper>
                                <h4 className={cx('search-title')}>Accounts</h4>
                                <AccountItem />
                                <AccountItem />
                                <AccountItem />
                            </PopperWrapper>
                        </div>
                    )}
                >
                    <div className={cx('search')}>
                        <input
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                        />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                        </button>
                        <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        />

                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </HeadlessTippy>
                <div className={cx('actions')}>
                   {currentUser ? (
                        <>
                       <Tippy delay={[0,500]} content="Upload Video" placement='bottom'>
                            <button className={cx('action-btn')}>
                                <FontAwesomeIcon icon={faCloudUpload} />
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
                            <img 
                            
                            src='https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/ac9729124ec66a862daeba984c0a37f0.jpeg?lk3s=a5d48078&nonce=4949&refresh_token=9f2f2bf5b44018bee1ebca9a93ef4ed5&x-expires=1726887600&x-signature=2B8zRuPiiJoxsj%2Fcofp9fjCEax4%3D&shp=a5d48078&shcp=81f88b70' 
                            alt='Nguyen Van A' 
                            className= {cx('user-avatar')}/>
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
