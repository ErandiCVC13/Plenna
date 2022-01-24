import Layout from "@src/layout/Layout";
import "@src/config/firebase.config";
import "../styles/globals.css";
import { AuthProvider } from "@src/hook/auth";
import AuthStateChanged from "@src/layout/AuthStateChanged";
import { AppointmentProvider } from "@src/context/AppointmentContext";

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <AuthStateChanged>
        <AppointmentProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </AppointmentProvider>
      </AuthStateChanged>
    </AuthProvider>
  );
}

export default MyApp;
