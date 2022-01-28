import { Link } from "react-router-dom";

const Missing = () => {
    return (
        <main className="Missing">
            <h2>Post not found </h2>
            <p>Well thats disappointing</p>
            <p><Link to='/'>Visit our Homepage</Link></p>
        </main>
    );
};

export default Missing;
