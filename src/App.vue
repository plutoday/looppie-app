<template>
  <div id="app">
    <header>
      <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
              <img class="logo" src="./assets/pie.png"/>
              Home
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Explore'}" exact>
              Explore
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Submit'}" exact>
              &nbsp;&nbsp;Ask&nbsp;&nbsp;
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Answer'}" exact>
              Answer
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'My'}" exact>
              Records
            </router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main>
    <router-view></router-view>
    </main>
  </div>
</template>

<script>

export default {
  name: 'app',
};
</script>

<style>
body{
  background-attachment: fixed;
  background: linear-gradient(to bottom, rgb(87, 85, 85), lightgrey);
}
</style>
<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
main{
  margin: 0 auto;
  padding: 30px;
  background-color: lightyellow;
  width: 1024px;
  min-height: 550px;
}
header {
  background-color: #999;
  width: 1084px;
  margin: 0 auto;
}
ul {
  padding: 3px;
  display: flex;
  text-align: center;

}
li {
  text-align: center;

}
.nav-item {
  display: inline-block;
  padding: 5px 10px;
  font-size: 22px;
  border-right: 1px solid #bbb;
}
.logo {
  vertical-align: middle;
  height: 30px;
}
.nav-link {
  text-decoration:none;
  color: inherit;
}
.router-link-active {
  color: yellow;
}
</style>
