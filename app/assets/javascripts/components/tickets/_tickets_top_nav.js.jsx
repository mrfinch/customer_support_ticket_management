class TicketsTopNav extends React.Component {
  render () {
    console.log(this.props);
    let showForm = this.props.openTicket;
    let pending = !showForm ? (this.props.showPendingTickets ? 'active' : '') : ''
    let resolved = !showForm ? (this.props.showPendingTickets ? '' : 'active') : ''
    let pdfButton = this.props.currentUser.admin ? <a href="/pdf" className="btn btn-success navbar-btn msR" target="_blank">Pdf view</a> : null
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Tech Support</a>
          </div>
          <div className="collapse navbar-collapse">
            <ul className="nav navbar-nav">
              <li className={pending} onClick={this.props.setPendingTicket}><a href="#">Pending Tickets</a></li>
              <li className={resolved} onClick={this.props.setResolvedTicket}><a href="#">Resolved Tickets</a></li>
            </ul>
            <div className="nav navbar-nav navbar-right msR">
              {pdfButton}
              <button type="submit" className="btn btn-success navbar-btn msR" onClick={this.props.onOpenTicket}>Open ticket</button>
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
