export function SignUp() {
  return (
    <div className="flex flex-col ">
      <h1>Sign Up</h1>
      <p>Enter your credentials to create an account</p>
      <label htmlFor="firsname">First Name</label>
      <input type="text" name="firstname" id="firsname" placeholder="John" />
      <label htmlFor="lastname">Last Name</label>
      <input type="text" name="lastname" id="lastname" placeholder="Doe" />
      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        name="email"
        id="email"
        placeholder="johnode@example.com"
      />
      <label htmlFor="password">Password</label>
      <input type="text" name="password" id="password" placeholder="********" />
      <button>Sign Up</button>
    </div>
  );
}
