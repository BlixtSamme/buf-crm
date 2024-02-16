import { Link } from "react-router-dom";

function Home() {
    return (
      <div data-theme="nord" className="App">
      <div className="hero min-h-screen bg-primary">
      <div className="hero-content flex-col rounded-xl bg-accent shadow-md">
          <h1 className="text-5xl bold">
            Welcome to BUF CRM
          </h1>
        <Link to="/dashboard"className="btn btn-primary shadow-sm">Click Here to get Started</Link>
        </div>
      </div>
    </div>
    );
}

export default Home;