<template>
  <div class="container">
    <div class="signin-form">
      <form>
        <div class="form-group">
          <label for="email">Email Address</label>
          <input
            type="email"
            class="form-control"
            id="email"
          />
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" class="form-control" id="password" />
        </div>
        <div class="text-center">
          <button class="btn btn-md btn-success submit">Sign In</button>
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

.signin-form {
  width: 400px;
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
