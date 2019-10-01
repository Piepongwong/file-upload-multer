## File Uploads to Server with Multer

To upload a file you need to:
 1. adjust the form on the front-end. Take a look at `upload-pictures.hbs`. :white_check_mark:
 2. On the back-end you need to set up a route that processes the data coming from the form. Since form that contain files send their data in a different encoding type (multi-part/formdata), you need a package that can parse data in this datatype. This package is multer. Check the npm page for multer. Make sure your field-names match.:white_check_mark:
 3. Save a reference to the file in the database. This example uses a simple Picture model, but you can include a path in any kind of model. :white_check_mark:

General tip: use Postman  :package: to first implement the route. If you got that to work, you can start focussing on the front-end. This will not only speed up your workflow considerably, but it will become easier to create automated tests later as well!

