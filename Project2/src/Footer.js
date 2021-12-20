import './index.css'
const Footer = () => {
    const date = new Date();

    return (
        <footer className= "footer">
          <p>Copyrigth &copy; {date.getFullYear()}</p>
        </footer>
    )
}

export default Footer
