class Tickets extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openTicket: false
    };
  }
  openTicketForm() {
    this.setState({ openTicket: !this.state.openTicket });
  }
  render() {
    console.log(this.state);
    return (
      <div>
        <TicketsTopNav onOpenTicket={this.openTicketForm.bind(this)} />
        <TicketsMainView showTicketForm={this.state.openTicket} />
      </div>
    )
  }
}
