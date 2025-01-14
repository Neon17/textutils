import {PropTypes} from 'prop-types';

function Navbar(props) {
  
  const handleChange = ()=>{
    if (props.toggleMode==='dark'){
      props.setMode('light');
      props.showAlert('Switched to Light Mode!','success');
    }
    else{
      props.setMode('dark');
      props.showAlert('Switched to Dark Mode!','success');
    }
  }

  return (
    <>
    <nav className={`navbar navbar-${props.toggleMode} navbar-expand-lg bg-${props.toggleMode}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/about">{props.aboutText}</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Dropdown
              </a>
              <ul className="dropdown-menu">
                <li><a className="dropdown-item" href="/">Action</a></li>
                <li><a className="dropdown-item" href="/">Another action</a></li>
                <li><hr className="dropdown-divider"/></li>
                <li><a className="dropdown-item" href="/">Something else here</a></li>
              </ul>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href='/'>Disabled</a>
            </li>
          </ul>
          <div className={`form-check form-switch float-end px-2 text-${(props.toggleMode==='light')?'dark':'light'}`}>
            <input className="form-check-input" onChange={handleChange} type="checkbox" role="switch" id="flexSwitchCheckChecked"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">
              {(props.toggleMode==='light')?'Switch to dark mode':'Switch to light mode'}
            </label>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
Navbar.defaultProps = {
  title: 'Set Title Here',
  aboutText: 'About',
  toggleMode: 'light'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired
}

