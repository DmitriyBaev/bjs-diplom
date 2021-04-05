"use strict";

const userForm = new UserForm();

userForm.loginFormCallback = (data) =>
  ApiConnector.login(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
       userForm.setLoginErrorMessage(response.error);
    }
  });
//console.log(userForm.loginFormCallback);

userForm.registerFormCallback = (data) =>
  ApiConnector.register(data, (response) => {
    if (response.success) {
      location.reload();
    } else {
       userForm.setRegisterErrorMessage(response.error);
    }
  });
//console.log(userForm.registerFormCallback);
