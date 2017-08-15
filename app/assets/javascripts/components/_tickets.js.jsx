// to remember state across render: https://stackoverflow.com/questions/31352261/how-to-keep-react-component-state-between-mount-unmount
let state = {
  openTicket: false,
  showPendingTickets: true,
  showResolvedTickets: false
};

class Tickets extends React.Component {
  constructor(props) {
    super(props);

    this.state = state;
  }
  componentWillUnmount() {
    // Remember state for the next mount
    state = this.state;
  }
  openTicketForm() {
    this.setState({ openTicket: !this.state.openTicket });
  }
  setResolvedTicket() {
    this.setState({ openTicket: false, showResolvedTickets: true, showPendingTickets: false });
  }
  setPendingTicket() {
    this.setState({ openTicket: false, showResolvedTickets: false, showPendingTickets: true });
  }
  logoutUser() {
    $.ajax({
      url: '/auth/logout',
      type: 'DELETE',
      success: (response) => {
        console.log(response);
        window.location.href = "/";
      },
      error: (resp) => {
        console.log(resp);
      }
    });
  }
  render() {
    console.log(this.state);
    console.log(this.props);
    let currentUser = this.props.currentUser
    return (
      <div>
        <TicketsTopNav
          onOpenTicket={this.openTicketForm.bind(this)}
          openTicket={this.state.openTicket}
          showPendingTickets={this.state.showPendingTickets}
          setPendingTicket={this.setPendingTicket.bind(this)}
          setResolvedTicket={this.setResolvedTicket.bind(this)}
          currentUser={currentUser}
          handleLogout={this.logoutUser.bind(this)}
        />
        <TicketsMainView
          showTicketForm={this.state.openTicket}
          showPending={this.state.showPendingTickets}
          currentUser={currentUser}
        />
      </div>
    )
  }
}
