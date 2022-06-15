<template>
  <div>
    <h1>欢迎来到:{{admin.userName}}</h1>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Test",
  data:function (){
    return{
      admin:''
    }
  },
  created() {
    // console.log(window.localStorage.getItem('access-admin'))
    this.admin = JSON.parse(window.localStorage.getItem('access-admin'))
  }
}
</script>
<style scoped>

</style>