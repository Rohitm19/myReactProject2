import './index.css'
const Footer = ({length}) => {
    // const date = new Date();

    return (
        <footer className= "footer">
          <p>{length} {length > 1 ? "items" : "item"} in your cart </p>
        </footer>
    )
}

export default Footer
