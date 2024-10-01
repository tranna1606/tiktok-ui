import classNames from "classnames/bind";
import Tippy from "@tippyjs/react";
import {Wrapper as PopperWrapper} from "~/components/Popper"
import styles from "./Menu.module.scss"
import MenuItem from "./MenuItem"
import Header from "./Header"
import { useState } from "react";

const cx = classNames.bind(styles)
const defaultFn = () => {

}
function Menu({children, items = [],hideOnClick = false, onChange = defaultFn}) {
    const [history, setHistory] = useState([{data: items}])
    const current = history[history.length -1]

    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children;

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if(isParent){
                            setHistory(prev => [...prev, item.children])
                        }else{
                            onChange(item)
                        }
                    }}
                />
            );
        });
    };
       
       
    const handleReset = () => {
        setHistory((prev) => prev.slice(0, 1));
    };

      
    return ( 

        <Tippy
            // {...passProps}
            interactive
            placement="bottom-end"
            offset={[12,8]}
            hideOnClick = {hideOnClick}
            render = {(attrs) => (
                <div className= {cx('menu-list')} tabIndex="-1">
                    <PopperWrapper className={cx('menu-popper')}>
                        {history.length > 1 &&<Header title = "Languages" onBack={()=>{
                            setHistory(prev => prev.slice(0, prev.length -1))
                        }}/>}

                        <div className={cx('menu-body')}>{renderItems()}</div>
                    </PopperWrapper>

                </div>
            )}
            onHide={handleReset}
        >
            {children}
        </Tippy>
     );
}

export default Menu;