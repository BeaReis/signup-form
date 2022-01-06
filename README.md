### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - Any `input` field is empty. The message for this error should say *"[Field Name] cannot be empty"*
  - The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Looks like this is not an email"*

### Screenshot

![](https://github.com/BeaReis/singup-form/blob/main/screenshot-desktop.png)
![](https://github.com/BeaReis/singup-form/blob/main/screenshot-mobile.png)

### Links

- https://beareis.github.io/singup-form/


### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Template string
- JQuery
- Media Query
- Javascript

### Future improvements

- Refactor the CSS file to make it more simple yet efficient
- Add functionality: after the error message (when the button is pressed but one or more inputs are empty), if the user clicks (focus on) a input, that field should return to initial state (must remove added classes and return placeholder to its original text). 
