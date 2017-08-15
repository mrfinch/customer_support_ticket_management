class TicketAdminView extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    let fixClass = "js-days-to-fix" + this.props.ticket.id + " msL";
    return (
      <span key={this.props.ticket.id}>
        <div className="form-group">
          <strong className="msL msR">Select Status:</strong>
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions2" value="1" /> Accept
          </label>
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions2" value="2" /> Reject
          </label>
          <label className="radio-inline">
            <input type="radio" name="inlineRadioOptions2" value="3" /> Fixed
          </label>
          <input className={fixClass} placeholder="Days to fix" />
        <button type="submit" className="btn btn-success msL" onClick={this.props.updateTicket}>Update</button>
        </div>
      </span>
    )
  }
}
