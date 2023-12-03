/* eslint-disable react/prop-types */
import { useSelector } from "react-redux"
import { selectEmail } from "../../redux/slice/authSlice"
import { Link } from "react-router-dom";

const AdminOnlyRoute = ({children}) => {
    const userEmail = useSelector(selectEmail);

    if(userEmail === "abhinavsinha135@gmail.com" || userEmail === "sshirrsh@gmail.com") {
        return children;
    }
    return (
      <section style={{ height: "80vh" }}>
        <div className="container">
          <h2>Permission Denied.</h2>
          <p>This page can only be viewed by an Admin User.</p>
          <br />
          <Link to={"/"}>
            <button className="--btn">&larr; Back to Home</button>
          </Link>
        </div>
      </section>
    );
}

export const AdminOnlyLink = ({children}) => {
    const userEmail = useSelector(selectEmail);

    if(userEmail === "abhinavsinha135@gmail.com") {
        return children;
    }
    return null;
}

export default AdminOnlyRoute;