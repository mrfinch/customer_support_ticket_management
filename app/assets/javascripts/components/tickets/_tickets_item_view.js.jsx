class TicketsItemView extends React.Component {

  render () {
    const monthNames = ["Jan", "Feb", "March", "April", "May", "June",
      "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    let createdDate = new Date(this.props.data.created_at);
    let date = createdDate.getDate();
    let month = monthNames[createdDate.getMonth()];

    let resolveDate = this.props.data.resolve_eta ? new Date(this.props.data.resolve_eta).toDateString() : 'None'
    let updatedDate = new Date(this.props.data.updated_at).toDateString();
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
          <ul>
            <li style={{width:33 + '%'}}>Type: {this.props.data.type}</li>
            <li style={{width:33 + '%'}}>Last update on: {updatedDate}</li>
            <li style={{width:33 + '%'}}>ETA to resolve: {resolveDate}</li>
          </ul>
        </div>
      </li>
    )
  }
}
