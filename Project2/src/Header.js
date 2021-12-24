import './index.css'
const Header = ({title}) => {

    return (
        <header className= "header">
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title : "default props"
}
export default Header
