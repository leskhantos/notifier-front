<template>
  <div class="container">
    <div class="card-main">
      <header class="card-header">
        <p></p>
      </header>
      <div class="card-content">
        <form>
          <div>
            <div class="card-content-Column">
              <label for="defaultFormLoginEmailEx">Username</label>
              <input type="text" id="defaultFormLoginEmailEx" class="form-control" v-model="payload.username">
            </div>
            <div class="card-content-Column">
              <label for="defaultFormLoginPasswordEx">Password</label>
              <input type="password" id="defaultFormLoginPasswordEx" class="form-control" v-model="payload.password">
            </div>
          </div>
        </form>
      </div>
      <button @click="authorization" type="submit">Log In</button>
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
        this.$store.dispatch('user/loginTo')
        this.$router.push('templates')
      }
    }
  }
  </script>

  <style scoped lang="scss">

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font: inherit;
    vertical-align: baseline;
  }

  .container {
    margin: 0 auto;
    width: 100%;
    .card-main {
      width: 45%;
      height: 40%;
      margin: 15% auto;
      padding: 30px 40px;
      background-color: white;
      border: 1px solid #bbb;
      border-radius: 7px;
      .card-header {
        background-color: white;
        p {
          width: 100%;
          height: 60px;
          background-image: url("../assets/login_logo.png");
          background-repeat: no-repeat;
          background-position: center;
          border-bottom: 3px #db132e solid;
        }
      }
      .card-content {
        .card-content-Column {
          margin: 15px auto;
        }
        label {
          font-size: 16px;
          font-weight: 500;
          margin-bottom: 10px;
        }
      }
    }
    button {
      background-color: #db132e;
      color: white;
      padding: 10px 43%;
      text-align: center;
      text-decoration: none;
      display: inline-block;
      font-size: 20px;
      transition-duration: 0.4s;
      border: 2px solid #db132e;
    }
    button:hover {
      background-color: #ffffff;
      color: #db132e;
      border: 2px solid #db132e;
    }
  }
  </style>