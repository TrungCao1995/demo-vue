<template>
  <div class="greeting text-center">
      <h1 v-if="userName">{{userName | capitalize}}</h1>
      <h2>Welcome to Vue Demo App</h2>
      
  </div>
</template>

<script>
export default {
    filters: {
        capitalize(userName) {
            return userName.charAt(0).toUpperCase() + userName.slice(1)
        }
    },
    computed: {
        userName() {
            return !this.$store.getters.userDetail ? false : this.$store.getters.userDetail.fullName
        }

    },
    created() {
        this.$store.dispatch('getUserLoginInfo')
    }
}
</script>

<style lang="scss" scoped>
    .greeting {
        margin-top: 20px;
    }
</style>
