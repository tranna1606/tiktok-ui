import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss"
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
const cx = classNames.bind(styles)

function AccountPreview() {
    return ( 
        <div className= {cx('wrapper')}>
            <div className={cx('header')}>
                <img className= {cx('avatar')} src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/6cb5e436d2b9597490ca8bee96c7ec99.jpeg?lk3s=a5d48078&nonce=36548&refresh_token=6d5b3aaefb730cdec665db5361e5c2d5&x-expires=1728021600&x-signature=Sx2YRmElWw2pwgmzJq%2BccR0ojXc%3D&shp=a5d48078&shcp=81f88b70" alt="avatar"/>
                <Button  className= {cx('follow-btn')} primary>Follow</Button>
            </div>
            <div className= {cx('body')} >
                <p className= {cx('nickname')}>
                        <strong>nguyentrang01</strong>
                        <FontAwesomeIcon className = {cx('check')} icon={faCheckCircle}/>
                </p>
                <p className= {cx('name')}>Nguyen Phuong Trang</p>
                <p className= {cx('analytics')}>
                    <strong className= {cx('count')}>2.3M </strong>
                    <span className= {cx('label')}>Followers</span>
                    <strong className= {cx('count')}>288.3K </strong>
                    <span className= {cx('label')}>Likes</span>
                </p>
            </div>
        </div>
     );
}

export default AccountPreview;