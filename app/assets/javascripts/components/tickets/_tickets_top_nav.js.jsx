class TicketsTopNav extends React.Component {
  render () {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Tech Support</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li><a href="#">Pending Tickets</a></li>
              <li><a href="#">Resolved Tickets</a></li>
            </ul>
            <div className="nav navbar-nav navbar-right msR">
              <ul className="nav navbar-nav navbar-right">
                <li className="dropdown">
                  <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span className="glyphicon glyphicon-user"></span><span className="caret"></span></a>
                  <ul className="dropdown-menu">
                    <li><a href="#">Profile</a></li>
                    <li><a href="#">Log out</a></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    )
  }
}
