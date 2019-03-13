<template>
<div>
    <div id="login">
        <h1>Looppie is a Fun Survey you can play with your friends</h1>
        <h1>Login with your google account</h1>
    <div class="g-signin2" data-onsuccess="onSignIn"></div>
    </div>
    <div class="data">
        <p>Welcome to Looppie</p>
        <img id="pic" class="img-circle" width="100" height="100">
        <div id="menu">
            <div id="profile">
                <p id="name"></p>
                <p id="email"></p>
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
            <img src="../assets/pie.png" alt="submit" width="20" height="20"/>
            <span onclick="signOut()" class="btn btn-danger"> SignOut</span>
        </div>
    </div>
</div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#login{
    margin: 200px auto;
    display: block;
    text-align:center;

}
.g-signin2{
    margin-left: 450px;
}
.data{
    display: block;
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
</style>