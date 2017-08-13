class TicketsMainView extends React.Component {
  render () {
    return (
      <div className="container">
        <div className="row">
          <ul className="event-list">
            <TicketsItemView />
          </ul>
        </div>
      </div>
    )
  }
}
