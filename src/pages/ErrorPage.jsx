import NavBar from "../components/NavBar"; // Import NavBar component

function ErrorPage() {
  return (
    <div>
      <NavBar /> {/* Display the NavBar component */}
      <h1>Oops! Looks like something went wrong.</h1> {/* Error message */}
    </div>
  );
}

export default ErrorPage;
