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
  render() {
    console.log(this.state);
    return (
      <div>
        <TicketsTopNav
          onOpenTicket={this.openTicketForm.bind(this)}
          openTicket={this.state.openTicket}
          showPendingTickets={this.state.showPendingTickets}
          setPendingTicket={this.setPendingTicket.bind(this)}
          setResolvedTicket={this.setResolvedTicket.bind(this)}
        />
        <TicketsMainView showTicketForm={this.state.openTicket} showPending={this.state.showPendingTickets} />
      </div>
    )
  }
}
