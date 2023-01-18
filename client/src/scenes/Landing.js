import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <h1>My App</h1>
      <p>Interesting description about the app</p>
      <form>
        <div className="inputs">
      <input type="email" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
        </div>
      <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Landing;