class LoginForm extends React.Component {

  loginUser() {
    password = this.$('[name="password"]').val();
    email = this.$('[name="email"]').val();
    $.ajax({
      url: 'auth/login',
      data: {
        password: password,
        email: email
      },
      type: 'POST',
      success: (response) => {
        console.log(response);
        this.$('.error').html('');
        this.$('.success').html('Login Successful');
        window.location.href = "/support";
      },
      error: (resp) => {
        console.log(resp);
        response = $.parseJSON(resp.responseText);
        this.$('.success').html('');
        this.$('.error').html(response.message);
      }
    });
  }

  render() {
    return (
      <div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" />
        </div>
        <div className="checkbox">
          <label>
            <input type="checkbox" /> Remember me
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-default msR" onClick={this.loginUser}>Log In</button>
          <button type="submit" className="btn btn-default inlineBlock" onClick={this.props.closeModal}>Close</button>
        </div>
        <div className="form-group msT">
          <p className="error inlineBlock"></p>
          <p className="success inlineBlock"></p>
        </div>
      </div>
    )
  }
}