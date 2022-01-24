import Button from "@src/components/shared/atoms/Button";
import Typography from "@src/components/shared/atoms/Typography";
import { withPublic } from "@src/hook/routes";

import styles from "../styles/Home.module.css";

const Login = ({ auth }) => {
  const { loginWithGoogle, error } = auth;

  return (
    <div className={styles.containerLogin}>
      <div className={styles.login}>
        <Typography variant="h3" color="light">
          Portal del equipo
        </Typography>
        <div style={{ marginTop: "4rem" }}>
          <Button variant="primary" onClick={loginWithGoogle}>
            <Typography variant="small">Iniciar sesión con Google</Typography>
          </Button>{" "}
          {error && <Typography color="error">{error}</Typography>}
        </div>
      </div>
    </div>
  );
};

export default withPublic(Login);
