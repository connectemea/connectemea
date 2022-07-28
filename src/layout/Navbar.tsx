
const Navbar = ({hide=false}) => {
  return (
<ul className={`${hide?"hidden md:flex":"flex"} flex-col md:flex-row md:flex-1 justify-center`}>
    <li>
      <a href="#home">Home</a>
    </li>
    <li>
      <a href="#blogs">Blogs</a>
    </li>
    <li>
      <a href="#joinUs">Join Us</a>
    </li>
  </ul>
  )
}

export default Navbar;