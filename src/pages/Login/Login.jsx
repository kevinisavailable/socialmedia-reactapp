import "./login.scss";

const Login = () => {
  return (
    <div className="login">
      <div className="card">
        <div className="left">
          <h1>Welcome</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
            hic quam eligendi dolore enim, itaque blanditiis illum dolorem,
            deserunt, ea voluptatum alias sequi vel natus delectus earum sunt
            ipsam. Consequuntur cum nulla doloribus architecto fugit sunt
            repellendus praesentium inventore, distinctio dolorum eaque, error
            aliquid aperiam nesciunt dignissimos iure officiis dolore.
          </p>
          <span>Don't have an account?</span>
          <button>Register</button>
        </div>
        <div className="right">
          <h1>Login</h1>
          <form >
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button>Login</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
