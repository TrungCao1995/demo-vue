<template>
  <div class="container">
    <div class="signup-form">
      <form>
        <div class="form-group">
          <label for="fullName">Full Name</label>
          <input type="email" class="form-control" id="fullName" />
        </div>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>

        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="form-group">
          <label for="confirmPassword">Confirm Password</label>
          <input type="password" class="form-control" id="confirmPassword" />
        </div>
        <div class="form-group">
          <label for="birthday">Date of Birth</label>
          <div id="birthday" class="form-row">
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control"
                id="month"
                placeholder="MM"
              />
            </div>
            <div class="form-group col-md-3">
              <input
                type="text"
                class="form-control"
                id="day"
                placeholder="DD"
              />
            </div>
            <div class="form-group col-md-6">
              <input
                type="text"
                class="form-control"
                id="year"
                placeholder="YYYY"
              />
            </div>
          </div>
        </div>
        <div class="form-group form-check">
          <input type="checkbox" class="form-check-input" id="checkTerm" />
          <label class="form-check-label" for="checkTerm"
            >I accept the terms and conditions</label
          >
        </div>
        <div class="text-center">
          <button class="btn btn-md btn-success submit">Sing Up</button>
        </div>
      </form>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.signup-form {
  width: 500px;
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
</style>
