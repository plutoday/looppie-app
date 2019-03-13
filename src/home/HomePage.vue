<template>
<div>
    <div id="login" v-if!="this.isConnected">
        <h1>Looppie is a Fun Survey you can play with your friends</h1>
        <h2>Login with your facebook account</h2>
    </div>
    <div class="data" v-if="this.isConnected">
        <h2>Welcome to Looppie</h2>
        <div id="menu">
            <div id="profile">
                <img id="pic" width="100" height="100">
                <span id="name"></span>
            </div>
            <router-link to="/question" class="menuLink">
            <img src="../assets/pie.png" alt="explore" width="20" height="20"/>
            Explore Fun Questions
            </router-link><br>
            <router-link to="/ask"  class="menuLink">
            <img src="../assets/pie.png" alt="submit" width="20" height="20"/>
            Ask a Question
            </router-link><br>
            <router-link to="/answer"  class="menuLink">
            <img src="../assets/pie.png" alt="submit" width="20" height="20"/>
            Answer a Question
            </router-link><br>
            <router-link to="/me"  class="menuLink">
            <img src="../assets/pie.png" alt="submit" width="20" height="20"/>
            My Records
            </router-link><br>
        </div>
    </div>
    <facebook-login class="button"
      appId="1191320394368306"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkloaded">
    </facebook-login>
</div>
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
 
export default {
  name: "HomePage",
  components: { 
      facebookLogin
    },
  methods: { 
    getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn("get data from fb",userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkloaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData();

    },
    onLogout() {
      this.isConnected = false;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
    margin: 200px auto;
    margin-bottom: 0px;
    display: block;
    text-align:center;

}
.g-signin2{
    margin-left: 450px;
}
.data{
    text-align: center;
}
#pic{
    position: relative;
}
#profile{
    display: block;
}

#menu {
   text-align: left;
   margin-left: 400px;
   font-size: 26px;
}
.menuLink {
  text-decoration:none;
  color: black;
}
.button {
    margin-top: 20px;
    margin-left: 400px;
}
template {
    text-align: center;
}

</style>