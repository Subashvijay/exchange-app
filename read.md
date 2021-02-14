##git

repo link https://github.com/Subashvijay/exchange-app.git

## push an existing repository from the command line

git remote add origin https://github.com/Subashvijay/exchange-app.

## Adding bootstrap

1. npm i bootstrap
2. npm i jquery
3. npm i popper.js@1.14.3
4. add link in angular .json
   "styles": [
   "styles.scss",
   "../node_modules/bootstrap/dist/css/bootstrap.min.css",
   ],
   "scripts": [
   "./node_modules/jquery/dist/jquery.js",
   "./node_modules/popper.js/dist/umd/popper.min.js",
   "./node_modules/bootstrap/dist/js/bootstrap.js"
   ]

## addinf font awesome'

1. add <script src="https://kit.fontawesome.com/a076d05399.js"></script>
2. sizing
   <i class="fas fa-camera fa-xs"></i>
   <i class="fas fa-camera fa-sm"></i>
   <i class="fas fa-camera fa-lg"></i>
   <i class="fas fa-camera fa-2x"></i>
   <i class="fas fa-camera fa-3x"></i>
   <i class="fas fa-camera fa-5x"></i>
   <i class="fas fa-camera fa-7x"></i>
   <i class="fas fa-camera fa-10x"></i>

https://www.c-sharpcorner.com/article/authentication-and-authorization-in-angular/

https://angular.io/guide/deployment

ng build --prod --output-path docs --base-href /<project_name>/
ng build --prod --output-path docs --base-href exchange-app

AngularFirestoreModule, // Only required for database features
AngularFireAuthModule, // Only required for auth features,
AngularFireStorageModule // Only required for storage features

https://jsonworld.com/demo/how-to-connect-firebase-with-angular-8-application