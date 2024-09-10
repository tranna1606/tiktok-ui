
import styles from "./Menu.module.scss"
import classNames from "classnames/bind";


import Button from "~/components/Button";
const cx = classNames.bind(styles)
function MenuItem({data, onClick}) {
    return <Button className={cx('menu-item')} leftIcon={data.icon} onClick={onClick}>{data.title}</Button>
}

export default MenuItem;