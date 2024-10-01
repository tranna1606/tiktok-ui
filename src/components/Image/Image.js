import {forwardRef,useState} from 'react'
import images from '~/assets/images';
import classNames from 'classnames';
import styles from './Image.module.scss'
import PropTypes from 'prop-types'
const Image = forwardRef(({src, alt,className,fallback: customFallback = images.noImage,...props }, ref) => {
    //mặc định lấy hình noImage truyền vào còn nếu mình tự thêm fallback thì nó đổi
    const [fallBack, setFallBack] = useState('');
    const handleError = () => {
        setFallBack(customFallback)
    }
    return (
        
        <img 
        className = {classNames(styles.wrapper, className)}
        src={fallBack || src} 
        alt={alt} 
        ref={ref} 
        {...props} 
        onError={handleError}/>
    )
})
Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,

}

export default Image