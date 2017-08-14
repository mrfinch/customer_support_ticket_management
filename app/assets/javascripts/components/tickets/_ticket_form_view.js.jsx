class TicketFormView extends React.Component {
  createTicket() {
    name =  this.$('[name="cname"]').val();
    description = this.$('[name="description"]').val();
    type = $('input[name="inlineRadioOptions"]:checked').val();
    $.ajax({
      url: 'ticket',
      data: {
        name: name,
        description: description,
        type: type
      },
      type: 'POST',
      success: (response) => {
        console.log(response);
        this.$('.error').html('');
        this.$('.success').html('Ticket created successfully');
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
      <div className="ticketFormView center-block">
        <h2>Create Ticket</h2>
        <div className="form-group mdT">
          <input type="email" name="cname" className="form-control" placeholder="Ticket Name" />
        </div>
        <div className="form-group">
          <textarea className="form-control descript" rows="3" placeholder="Additional Information / Description" name="description"></textarea>
        </div>
        <div className="form-group">
          <label for="exampleInputEmail1">Issue type</label>
          <br />
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="bug" /> Bug
          </label>
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions" value="feature" /> Feature Request
          </label>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-success msR" onClick={this.createTicket}>Create</button>
          <p className="error inlineBlock"></p>
          <p className="success inlineBlock"></p>
        </div>
      </div>
    )
  }
}