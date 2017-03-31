# laravel5.4 + angular4

## first

```
git clone 
composer install
npm install
```

copy .env.example to .env

```
php artisan key:generate
```

## start server

### 1.node
```
npm start
```

or 

### 2.php

```
php -S 0.0.0.0 -t ./public
```

#### after edit file 
```
ng build
```

#### drawback
Unable to access sub path directly through the browser