// `.env.ts` is generated by the `npm run env` command
// `npm run env` exposes environment variables as JSON for any usage you might
// want, like displaying the version or getting extra config from your CI bot, etc.
// This is useful for granularity you might need beyond just the environment.
// Note that as usual, any environment variables you expose through it will end up in your
// bundle, and you should not use it for any sensitive information like passwords or keys.
import { env } from './.env';

export const environment = {
  firebase: {
    projectId: 'appvra-909d2',
    appId: '1:66925350704:web:ae86450cfcb8adadb682f5',
    storageBucket: 'appvra-909d2.appspot.com',
    apiKey: 'AIzaSyA6GeLf1j6Eiz24acjh-ZJO-82xCIT7PG0',
    authDomain: 'appvra-909d2.firebaseapp.com',
    messagingSenderId: '66925350704',
  },
  production: true,
  version: env['npm_package_version'],
  serverUrl: 'https://api.chucknorris.io',
  defaultLanguage: 'en-US',
  supportedLanguages: ['en-US', 'es-ES'],
};
