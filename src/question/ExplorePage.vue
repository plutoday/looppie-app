<template>
<div>
    <h1>This is Explore Page</h1>
        <nav>
        <ul>
          <li class="nav-item">
            <router-link class="nav-link" :to="{name: 'Home'}" exact>
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
            Ask
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
</div>
</template>

<script>
export default {
  name: 'ExplorePage'
}
</script>

<style scoped>
ul {
  padding: 3px;
  display: inline-block;
  background-color: #999;


}
li {
    text-align: left;
}
.nav-item {
  display: block;
  padding: 5px 10px;
  font-size: 22px;
  border-bottom: 1px solid #bbb;
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