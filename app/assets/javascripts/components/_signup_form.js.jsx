class SignupForm extends React.Component {

  constructor(props) {
    super(props);
  }

  signupUser () {
    console.log('hello');
    name =  this.$('[name="user-name"]').val();
    password = this.$('[name="password"]').val();
    email =  this.$('[name="email"]').val();
    $.ajax({
      url: 'auth/signup',
      data: {
        name: name,
        password: password,
        email: email
      },
      type: 'POST',
      success: (response) => {
        console.log(response);
        this.$('.error').html('');
        this.$('.success').html('Signup successful, activate using your email');
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
          <label for="exampleInputEmail1">Name</label>
          <input type="email" name="user-name" className="form-control" placeholder="Name" />
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input type="email" name="email" className="form-control" placeholder="Email" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" name="password" className="form-control" placeholder="Password" />
        </div>
        <div className="form-group">
          <label for="exampleInputPassword2">Confirm Password</label>
          <input type="password" className="form-control" placeholder="Confirm Password" />
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success inlineBlock msR" onClick={this.signupUser}>Sign up</button>
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
