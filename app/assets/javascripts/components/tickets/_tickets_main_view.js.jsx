class TicketsMainView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showPending: this.props.showPending != null ? this.props.showPending : true,
      tickets: []
    };
  }
  componentDidMount() {
    // implement pagination
    url = '/ticket?page=0&limit=25&show_pending=' + this.state.showPending;
    $.ajax({
      type: 'GET',
      url: url,
      success: (response) => {
        console.log(response);
        this.setState({ tickets: response.data })
      },
      error: (response) => {
        console.log('error')
      }
    })
  }
  render () {
    console.log(this.props);
    if(this.props.showTicketForm){
      console.log('here');
      view = <TicketFormView />

    } else {
      // view = <TicketsItemView />
      window.asd = this.state.tickets;
      if(this.state.tickets.length > 0)
        view = this.state.tickets.map((ticket) => {
          return (
            <TicketsItemView data={ticket} />
          )
        });
      else
        view = <h2>No Ticket created</h2>
    }
    console.log(view);
    return (
      <div className="container">
        <div className="row">
          <ul className="event-list">
            {view}
          </ul>
        </div>
      </div>
    )
  }
}
