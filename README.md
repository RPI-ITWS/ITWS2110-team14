# ITWS2110-team14

#### Helpful information

Button ripple effect:  
https://css-tricks.com/how-to-recreate-the-ripple-effect-of-material-design-buttons/

Javascript timers:  
https://www.w3schools.com/jsref/met_win_setinterval.asp

Window - localStorage property:  
https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage

Window - sessionStorage property:  
https://developer.mozilla.org/en-US/docs/Web/API/Window/sessionStorage

BootStrap form for Post-a-Listing:
https://getbootstrap.com/docs/4.0/components/forms/?

Contact Seller Popup:
https://www.youtube.com/watch?v=MBaw_6cPmAw

Page template:

```html
<!-- index.html -->

<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />

    <!--Global Imports-->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <link
      rel="icon"
      type="image/x-icon"
      href="/RPM/globals/images/RPM-logo.png"
    />
    <script
      src="/RPM/globals/components/navbar/navbar.js"
      type="text/javascript"
      defer
    ></script>

    <!--Local Imports-->
    <link rel="stylesheet" href="styles.css" />

    <title>RPM - <!-- INSERT TITLE --></title>
  </head>
  <body>
    <!--Bootstrap JS Import-->
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <navbar-component></navbar-component>

    <h1>Page Content</h1>
  </body>
</html>
```
