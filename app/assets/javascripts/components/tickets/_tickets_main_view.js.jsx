class TicketsMainView extends React.Component {
  render () {
    view = this.props.showTicketForm ? <TicketFormView /> : <TicketsItemView />
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
