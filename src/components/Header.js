// const Header = (props) => {
//   return <h1>Header</h1>
// }

// export default Header


import { Link } from "react-router-dom";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
  return (
    <nav className="nav">
      <Link to="/">
        <div>People App</div>
      </Link>
    </nav>
  )
}