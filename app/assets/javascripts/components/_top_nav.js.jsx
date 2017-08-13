class TopNav extends React.Component {
  constructor () {
    super()
    this.state = {
      isLoginModalOpen: false,
      isSignupModalOpen: false
    }
    this.closeLoginModal = this.closeLoginModal.bind(this);
    this.openLoginModal = this.openLoginModal.bind(this);
    this.closeSignupModal = this.closeSignupModal.bind(this);
    this.openSignupModal = this.openSignupModal.bind(this);
  }

  closeLoginModal() {
    this.setState({ isLoginModalOpen: false })
  }

  openLoginModal() {
    this.setState({ isLoginModalOpen: true })
  }

  closeSignupModal() {
    this.setState({ isSignupModalOpen: false })
  }

  openSignupModal() {
    this.setState({ isSignupModalOpen: true })
  }

  render () {
    return (
      <div>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Tech Support</a>
            </div>
            <div className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-default navbar-btn msR" onClick={this.openSignupModal}>Sign up</button>
              <button type="button" className="btn btn-success navbar-btn msR" onClick={this.openLoginModal}>Log In</button>
            </div>
          </div>
        </nav>
        <ModalComponent
          isOpen={this.state.isLoginModalOpen}
          onCloseRequest={this.closeLoginModal}
          modalClass='loginSignupModalClass'
        >
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="checkbox">
              <label>
                <input type="checkbox" /> Remember me
              </label>
            </div>
            <button type="submit" className="btn btn-default">Log In</button>
          </form>
        </ModalComponent>

        <ModalComponent
          isOpen={this.state.isSignupModalOpen}
          onCloseRequest={this.closeSignupModal}
          modalClass='loginSignupModalClass'
        >
          <form>
            <div className="form-group">
              <label for="exampleInputEmail1">Name</label>
              <input type="email" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
              <label for="exampleInputPassword2">Confirm Password</label>
              <input type="password" className="form-control" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-default">Sign up</button>
          </form>
        </ModalComponent>
      </div>
    )
  }
}
