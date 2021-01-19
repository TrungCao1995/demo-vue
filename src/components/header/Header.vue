<template>
  <header>
      <div class="home">
          <router-link to="/">Vue Demo</router-link>
      </div>
      <nav>
          <ul>
              <li>
                  <router-link to="/signup">Sign Up</router-link>
              </li>
              <li>
                  <router-link to="/signin">Sign In</router-link>
              </li>
              <li>
                  <button @click="onSignout" class="signout">Sign Out</button>
              </li>
          </ul>
      </nav>
  </header>
</template>

<script>
    export default {
        methods: {
            onSignout() {

            }
        }
    }
</script>

<style scoped lang="scss">
    header {
        height: 60px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 20px;
        background: #32362d;
    }
    nav {
        display: flex;
        height: 100%;
    }

    .home {
        font-weight: bold;
        color: white;
        a {
            text-decoration: none;
            color: white;
        }
    }

    ul {
        list-style: none;
        margin: 0;
        padding: 0;
        height: 100;
        display: flex;
        align-items: center;
    }
    li {
        margin: 0 16px;

        a {
            text-decoration: none;
            color: white;

            &:hover,
            &:active,
            &.router-link-active {
                color: #fa923f;
            }
        }
    }

    .signout {
        background-color: transparent;
        border: none;
        font: inherit;
        color: white;
        cursor: pointer;

        &:hover {
            color: #fa923f;
        }
    }
</style>
