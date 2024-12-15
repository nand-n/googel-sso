import environment from "../../environment";

const AuthPage = () => {
  const onGoogleLogin = () => {
    window.location.href = `${environment.apiUrl}/auth/oauth/google`;
  };

  return (
    <div>
      <button onClick={onGoogleLogin}>Google Login</button>
    </div>
  );
};

export default AuthPage;
