import SummaryList from "./components/SummaryList";


function Dashboard () {
  //TODO implement proper data fetching, uses dummy data for now
  const data = ["Company1", "Company2", "Company3"];

  return (
    <div data-theme="nord" className="Dashboard">
      <div className="navbar bg-accent">
        <div className="navbar-start">
          <h1 className="justify-self-center">Dashboard</h1>
        </div>
      </div>
      <div className="hero min-h-screen bg-primary grid-col-3">
        <div className="hero-content">
          <SummaryList data={data} />
        </div>
      </div>
    </div>
  )
}


export default Dashboard;