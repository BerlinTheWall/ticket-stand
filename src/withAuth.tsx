import Router from "next/router";
import { useIsLoggedIn } from "./hooks/useIsLoggedIn";

const withAuth = (WrappedComponent: any) => {
  const WithAuth = (props: any) => {
    const isLoggedIn = useIsLoggedIn();

    if (!isLoggedIn) {
      Router.push("/");
      return null;
    }

    return <WrappedComponent {...props} />;
  };

  WithAuth.getInitialProps = async (ctx: any) => {
    const wrappedComponentInitialProps = WrappedComponent.getInitialProps
      ? await WrappedComponent.getInitialProps(ctx)
      : {};

    return { ...wrappedComponentInitialProps };
  };

  return WithAuth;
};

export default withAuth;
