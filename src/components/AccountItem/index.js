import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/6cb5e436d2b9597490ca8bee96c7ec99.jpeg?lk3s=a5d48078&nonce=34821&refresh_token=ddd13b0fd4a99f92c693c929da72e315&x-expires=1725872400&x-signature=NdofKsjGednbdEME97V4XBufXbM%3D&shp=a5d48078&shcp=81f88b70"
                alt="Hoa"
            />

            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon
                        className={cx('check')}
                        icon={faCheckCircle}
                    />
                </h4>
                <span className={cx('username')}>nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
