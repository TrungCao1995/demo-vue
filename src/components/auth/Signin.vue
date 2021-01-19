<template>
  <div class="container">
    <div class="signin-form">
      <h2 class="text-center">Sign In</h2>
      
      <form @submit.prevent="onSignin">
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="user.email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" v-model="user.password"/>
        </div>
        <div class="text-center">
          <button class="btn btn-md btn-success submit">Let's Go</button>
        </div>
        <div class="signup text-center">
          <router-link to="/signup">New user? Sign up</router-link>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: '',
        password: ''
      }
    }
  },
  methods: {
    onSignin() {
      this.$store.dispatch("signin", {
        email: this.user.email,
        password: this.user.password
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 80vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.signin-form {
  width: 340px;
  padding: 20px;
  border: solid 1px #eee;
  border-radius: 1px;
  box-shadow: 0 2px 3px #ccc;
  overflow: hidden;
}

.btn.submit {
  width: 140px;
  height: 40px;
}

.signup {
  margin-top: 40px;
  
  a {
    font-size: 12px;
    text-decoration: none;
  }
}
</style>
