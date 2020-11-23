<template>
  <div class="container">
  <div class="child">
    <form>
      <p class="h4 text-center mb-4">
        <img src="../assets/login_logo.png" alt="login logo">
      </p>
      <label for="defaultFormLoginEmailEx" class="grey-text">Username</label>
      <input type="text" id="defaultFormLoginEmailEx" class="form-control" v-model="payload.username"/>
      <br/>
      <label for="defaultFormLoginPasswordEx" class="grey-text">Password</label>
      <input type="password" id="defaultFormLoginPasswordEx" class="form-control" v-model="payload.password"/>
      <div class="text-center mt-4 row">
        <button class="btn btn-danger col-12" @click="authorization" type="submit">Login</button>
      </div>
    </form>
    </div>
  </div>
  </template>

  <script>
  export default {
    name: "Welcome",
    data(){
      return{
        payload:{
          username: '',
          password: ''
        }
      }
    },
    methods:{
      authorization(){
        // this.$store.dispatch('user/loginTo',this.payload)
        // .then(()=>{
        //   this.$router.push('templates')
        // })
        // .catch(()=>{
        //   console.log('err')
        // })
        this.$router.push('templates')
      }
    }
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