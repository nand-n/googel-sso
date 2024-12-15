import { jwtDecode } from "jwt-decode";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { UserDef, useAuthState } from "../auth/state/state";

const GoogleOAuthSuccessRedirect = () => {
  const [params] = useSearchParams();
  const { setUser } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    const jwtUser = params.get("jwtUser");
    if (jwtUser) {
      const userFromJwt: UserDef = jwtDecode(jwtUser);
      userFromJwt && setUser(userFromJwt);
    }

    navigate("/dashboard");
  }, []);

  return <div>Logging in...</div>;
};

export default GoogleOAuthSuccessRedirect;
