class TicketsItemView extends React.Component {
  handleEdit() {
    console.log('edit');
    console.log(this.props);
    currentData = this.props.data;
    finalData = currentData;
    let fixClass = ".js-days-to-fix" + this.props.data.id
    finalData.resolve_eta = $(fixClass).val();
    finalData.current_status = $('input[name="inlineRadioOptions2"]:checked').val();
    console.log(finalData);
    url = "/ticket/" + this.props.data.id;
    $.ajax({
      type: 'PUT',
      url: url,
      data: finalData,
      success: (response) => {
        console.log(response)
        window.location.href = '/support'
      },
      error: (response) => {
        console.log('error')
      }
    })
  }
  render () {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const statuses = ['Request submitted', 'Request accepted', 'Request rejected', 'Request Fixed']
    let createdDate = new Date(this.props.data.created_at);
    let date = createdDate.getDate();
    let month = monthNames[createdDate.getMonth()];

    let resolveDate = this.props.data.resolve_eta ? new Date(this.props.data.resolve_eta).toDateString() : 'None'
    let updatedDate = new Date(this.props.data.updated_at).toDateString();
    let adminView = this.props.currentUser.admin ? <TicketAdminView ticket={this.props.data} updateTicket={this.handleEdit.bind(this)} /> : null;
    let currentStatus = statuses[this.props.data.current_status];
    return (
      <li key={this.props.data.id}>
        <time>
          <span className="day">{date}</span>
          <span className="month">{month}</span>
          <span className="year">2014</span>
          <span className="time">12:00 AM</span>
        </time>
        <div className="info">
          <h2 className="title">{this.props.data.name}</h2>
          <p className="desc">{this.props.data.description}</p>
          {adminView}
          <ul>
            <li style={{width:25 + '%'}}>Type: {this.props.data.type}</li>
            <li style={{width:25 + '%'}}>Last update on: {updatedDate}</li>
            <li style={{width:25 + '%'}}>ETA to resolve: {resolveDate}</li>
            <li style={{width:25 + '%'}}>Status: <strong>{currentStatus}</strong></li>
          </ul>
        </div>
      </li>
    )
  }
}
