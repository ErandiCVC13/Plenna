import Button from "../Button";
import Typography from "../Typography";
import { withProtected } from "@src/hook/routes";
import styles from "./NavBar.module.css";

const NavBar = ({ auth }) => {
  const { user, logout } = auth;

  return (
    <nav className={styles.containerNavBar}>
      <Typography color="light">
        Doc. {user.multiFactor.user.displayName}
      </Typography>
      <Button
        variant="tertiary"
        // customClass={styles.buttonNext}
        onClick={logout}
      >
        <Typography variant="small">Logout</Typography>
      </Button>
    </nav>
  );
};

export default withProtected(NavBar);
