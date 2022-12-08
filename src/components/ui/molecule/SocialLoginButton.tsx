import dynamic from 'next/dynamic';
import GoogleLogin from '@leecheuk/react-google-login';
import { apiGoogleLogin } from '@src/core/api/apiAuth';

export const GoogleLoginButton = dynamic(
  () =>
    Promise.resolve(() => {
      return (
        <GoogleLogin
          clientId="1372280291-nuqd1ficrl46l2s5q6ifpaa5573ug1vh.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={apiGoogleLogin}
          onFailure={apiGoogleLogin}
          cookiePolicy={'single_host_origin'}
        />
      );
    }),
  { ssr: false }
);
