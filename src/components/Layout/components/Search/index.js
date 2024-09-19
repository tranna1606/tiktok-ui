import { Wrapper as PopperWrapper } from '~/components/Popper';
import { 
    faCircleXmark, 
    faSpinner,
} from '@fortawesome/free-solid-svg-icons';
import AccountItem from '~/components/AccountItem';
import {SearchIcon } from '~/components/Icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';
import { useEffect, useRef, useState } from 'react';
import HeadlessTippy from '@tippyjs/react/headless';
function Search() {
    const cx = classNames.bind(styles);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)

    useEffect(() => {
        setTimeout(()=>{
            setSearchResult([1, 2, 3])
        },0)
    },[])
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    return ( 
        <HeadlessTippy
                    delay={[0,100]}
                    interactive={true} //để có thể click vào
                    visible={showResult && searchResult.length > 0}
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
                    onClickOutside={handleHideResult}
                >
                    <div className={cx('search')}>
                        <input
                            ref={inputRef}
                            value={searchValue}
                            placeholder="Search accounts and videos"
                            spellCheck={false}
                            onChange={(e)=> setSearchValue(e.target.value)}
                            onFocus={() => setShowResult(true)}
                        />
                        {!!searchValue && (
                            <button className={cx('clear')} onClick={handleClear}>
                            <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                        )}
                       
                        {/* <FontAwesomeIcon
                            className={cx('loading')}
                            icon={faSpinner}
                        /> */}

                        <button className={cx('search-btn')}>
                            <SearchIcon />
                           
                        </button>
                    </div>
                </HeadlessTippy>
     );
}

export default Search;

