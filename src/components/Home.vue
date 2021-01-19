<template>
  <div>
    <p>User info:</p>
    <p>Name: {{user.fullName}}</p>
    <p>Email: {{user.email}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    data() {
        return {
            user: {
                fullName: "",
                email: ""
            }
        }

    },
    created() {
        axios
            .get("/user.json")
            .then(res => {
                const data = res.data
                const users = []
                for (let key in data) {
                    users.push(data[key])
                }
                if (users.length > 0) {
                    this.user.fullName = users[0].fullName
                    this.user.email = users[0].email
                }
            })
            .catch(error => console.log(error))
    }
}
</script>
