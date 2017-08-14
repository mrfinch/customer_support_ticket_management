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
        <div className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" href="#">Tech Support</a>
            </div>
            <div className="nav navbar-nav navbar-right">
              <button type="button" className="btn btn-default navbar-btn msR" onClick={this.openSignupModal}>Sign up</button>
              <button type="button" className="btn btn-success navbar-btn msR" onClick={this.openLoginModal}>Log In</button>
            </div>
          </div>
        </div>
        <ModalComponent
          isOpen={this.state.isLoginModalOpen}
          modalClass='loginSignupModalClass'
        >
          <LoginForm closeModal={this.closeLoginModal.bind(this)} />
        </ModalComponent>

        <ModalComponent
          isOpen={this.state.isSignupModalOpen}
          modalClass='loginSignupModalClass'
        >
          <SignupForm closeModal={this.closeSignupModal.bind(this)} />
        </ModalComponent>
      </div>
    )
  }
}
