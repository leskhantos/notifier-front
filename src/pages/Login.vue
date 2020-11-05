<template>
  <div class="container">
  <div class="child">
    <form>
      <p class="h4 text-center mb-4">
        <img src="../assets/login_logo.png" alt="login logo">
      </p>
      <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
      <input type="text" id="defaultFormLoginEmailEx" class="form-control"/>
      <br/>
      <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
      <input type="password" id="defaultFormLoginPasswordEx" class="form-control"/>
      <div class="text-center mt-4 row">
        <button class="btn btn-danger col-12" @click="$router.push('templates')" type="submit">Login</button>
      </div>
    </form>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: "Welcome"
  }
  </script>

  <style scoped>
  .container{
    position: relative;

  }
  .child {
    width: 30%;
    border: 3px;
    position: absolute;
    top: 50%;
    left: 35%;
    transform: translate(0%, 50%);
  }
  </style>