import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';
function Menu({children}) {
    return ( 
        <NavLink>
            {children}
        </NavLink>
     );
}
Menu.propTypes = {
    children : PropTypes.node.isRequired
}

export default Menu;