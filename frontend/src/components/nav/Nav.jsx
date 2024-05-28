import './nav.css'
import nav_logo from '../../img/argentBankLogo.webp'

const Nav = () => {
  return (
    <nav>
      <a href="/">
        <img
          src={nav_logo}
          alt="Argent Bank Logo"
        />
        <h1>Argent Bank</h1>
      </a>
      <div>
        <a href="/login">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Nav;