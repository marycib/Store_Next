import { ProviderAuth } from "hooks/useAuth";
import "@styles/tailwind.css";
import MainLayout from "Layout/MainLayout.js";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ProviderAuth>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ProviderAuth>
    </>
  );
}

export default MyApp;
