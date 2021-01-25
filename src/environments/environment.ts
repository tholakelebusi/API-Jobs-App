// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
 firebaseConfig:{
    apiKey: "AIzaSyC909dUAsv7X7jGZFwv-85W0DzGSDAzPFs",
    authDomain: "jobapiapp.firebaseapp.com",
    projectId: "jobapiapp",
    storageBucket: "jobapiapp.appspot.com",
    messagingSenderId: "61071445770",
    appId: "1:61071445770:web:593d19e39e4380769f34f3"
  },
 
  API_URL:'https://us-central1-mlab-challenge.cloudfunctions.net/jobs'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
