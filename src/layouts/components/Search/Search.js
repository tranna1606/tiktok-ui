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
import {useDebounce} from '~/hooks';
import * as searchServices from '~/services/searchService'

function Search() {
    const cx = classNames.bind(styles);
    const [searchResult, setSearchResult] = useState([]);
    const [searchValue, setSearchValue] = useState('')
    const [showResult, setShowResult] = useState(true)
    const [loading, setLoading] = useState(false)

    const debouncedValue = useDebounce(searchValue, 500)
    useEffect(() => {
        if(!debouncedValue.trim()){//khoảng trắng đầu cuối
            setSearchResult([])
            return;
        }
        

        const fetchAPI = async() => {
            setLoading(true)

            const result = await searchServices.search(debouncedValue);
            setSearchResult(result)

            setLoading(false)
        }
        fetchAPI()
    },[debouncedValue])
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('')
        setSearchResult([])
        inputRef.current.focus()
    }
    const handleHideResult = () => {
        setShowResult(false)
    }
    const handleChange = (e) => {
        const searchValue = e.target.value;
        if(!searchValue.startsWith(' ')){
            setSearchValue(searchValue)
        }
         
    }
    return ( 
        //Using a wrapper <div> or <span> tag around the reference element solves this 
        //by creating a new parentNode context. 
    
            <div>
                <HeadlessTippy 
                            // appendTo={()=>document.body}
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
                                        {searchResult.map((result)=>(
                                            <AccountItem key= {result.id} data={result}/>
                                        ))}
                                        
                                       
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
                                    onChange={handleChange}
                                    onFocus={() => setShowResult(true)}
                                />
                                {!!searchValue && !loading && (
                                    <button className={cx('clear')} onClick={handleClear}>
                                    <FontAwesomeIcon icon={faCircleXmark} />
                                    </button>
                                )}
        
                                {loading &&   
                                <FontAwesomeIcon
                                    className={cx('loading')}
                                    icon={faSpinner}
                                />}
                               
                              
        
                                <button className={cx('search-btn')} onMouseDown={(e) => e.preventDefault()}>
                                    {/* onClick là nhấn vào nhả ra, onMouseDown là nhấn vào th */}
                                    <SearchIcon />
                                   
                                </button>
                            </div>
                        </HeadlessTippy>
            </div>
        
     );
}

export default Search;

