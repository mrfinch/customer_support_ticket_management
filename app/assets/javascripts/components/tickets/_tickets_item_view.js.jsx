class TicketsItemView extends React.Component {
  render () {
    return (
      <li>
        <time datetime="2014-07-20 0000">
          <span className="day">8</span>
          <span className="month">Jul</span>
          <span className="year">2014</span>
          <span className="time">12:00 AM</span>
        </time>
        <div className="info">
          <h2 className="title">Website broken</h2>
          <p className="desc">Page not loading</p>
          <ul>
            <li style={{width:33 + '%'}}>Type: Bug</li>
            <li style={{width:33 + '%'}}>Last update on: 13 July</li>
            <li style={{width:33 + '%'}}>ETA to resolve: 15 July</li>
          </ul>
        </div>
      </li>
    )
  }
}
