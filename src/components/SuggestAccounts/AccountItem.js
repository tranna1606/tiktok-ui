import classNames from "classnames/bind";
import styles from './SuggestAccounts.module.scss'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import HeadlessTippy from '@tippyjs/react/headless';
import {Wrapper as PopperWrapper} from "~/components/Popper"
import AccountPreview from "./AccountPreview";

const cx = classNames.bind(styles)
function AccountItem() {
    const renderPreview = (props) => {
        return (
            <div className= {cx('preview')} tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview />
                </PopperWrapper>
            </div>
        )
    }
    return (  
        <div>
            <HeadlessTippy 
                interactive
                placement="bottom"
                delay={[800,0]}
                render={renderPreview}
            >
            <div className={cx('account-item')}>
            <img className={cx('avatar')}
                src = 'https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6cb5e436d2b9597490ca8bee96c7ec99.jpeg?lk3s=a5d48078&nonce=36548&refresh_token=6d5b3aaefb730cdec665db5361e5c2d5&x-expires=1728021600&x-signature=Sx2YRmElWw2pwgmzJq%2BccR0ojXc%3D&shp=a5d48078&shcp=81f88b70'
                alt ='avatar'
            />
            <div className= {cx('item-info')}>
                <p className= {cx('nickname')}>
                    <strong>nguyentrang01</strong>
                    <FontAwesomeIcon className = {cx('check')} icon={faCheckCircle}/>
                </p>
                <p className= {cx('name')}>Nguyen Phuong Trang</p>
            </div>

        </div>
            </HeadlessTippy>
        </div>
        
    );
}
AccountItem.propTypes = {}

export default AccountItem;