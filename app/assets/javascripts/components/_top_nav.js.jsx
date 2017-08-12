class TopNav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Tech Support</a>
          </div>
          <div className="nav navbar-nav navbar-right">
            <button type="button" className="btn btn-default navbar-btn msR">Sign up</button>
            <button type="button" className="btn btn-success navbar-btn msR">Log In</button>
          </div>
        </div>
      </nav>
    )
  }
}
