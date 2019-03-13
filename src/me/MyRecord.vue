<template>
<div id="content">
    <h1>This is Explore Page</h1>
        <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
            My Questions
            </router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Explore'}" exact>
            My Answers
            </router-link>
          </li>
        </ul>
      </nav>
</div>
</template>

<script>
export default {
  name: 'ExplorePage'
}
</script>

<style scoped>
#content {
    text-align: center;
}
ul {
  padding: 3px;
  display: inline-block;
  text-align: center;
  background-color: #999;


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