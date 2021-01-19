<template>
  <div class="container">
    <div class="signup-form">
      <h2 class="text-center">Create Account</h2>
      <form @submit.prevent="onSubmit">
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input
            type="text"
            class="form-control"
            id="fullName"
            v-model="fullName"
          />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            v-model="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            class="form-control"
            id="password"
            v-model="password"
          />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input
            type="password"
            class="form-control"
            id="confirmPassword"
            v-model="confirmPassword"
          />
        </div>
        <div class="form-group">
          <label for="birthday">Date of Birth</label>
          <div id="birthday" class="form-row">
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control"
                id="month"
                v-model="birthday.month"
                placeholder="MM"
              />
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control"
                id="day"
                v-model="birthday.day"
                placeholder="DD"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                class="form-control"
                id="year"
                v-model="birthday.year"
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <input
            type="checkbox"
            class="form-check-input"
            id="checkTerm"
            v-model="terms"
          />
          <label class="form-check-label" for="checkTerm"
            >Accept terms of use</label
          >
        </div>
        <div class="text-center">
          <button type="submit" class="btn btn-success">Sing Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from "../../axios-auth";
export default {
  data() {
    return {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      birthday: {
        day: "",
        month: "",
        year: ""
      },
      terms: false
    };
  },
  methods: {
    onSubmit() {
      const user = {
        fullName: this.fullName,
        email: this.email,
        password: this.password,
        confirmPassword: this.confirmPassword,
        //birthday:
        terms: this.terms
      };
      axios
        .post(
          "accounts:signUp?key=AIzaSyAqhAB0qN2fRaDa_ublVua4tEvZf7dNTQk",
          {
            email: user.email,
            password: user.password,
            returnSecureToken: true
          }
        )
        .then(res => {
          console.log("sign up susscess", res)
          if (confirm("Sign in success. Login now!")) {
            this.$router.push("/signin")
          }
        })
        .catch(error => {
          console.log(error)
          alert("Sign up fail!")
        });
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 90vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.signup-form {
  width: 460px;
  padding: 25px;
  border: solid 1px #eee;
  border-radius: 1px;
  box-shadow: 0 2px 3px #ccc;
  overflow: hidden;
}

input[type="checkbox"] {
  width: 14px;
  height: 17px;
}

.btn[type="submit"] {
  width: 140px;
  height: 40px;
}
</style>
