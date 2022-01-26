<template>
  <div>{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "vue test utils"
    }
  },
  mounted() {
    console.log(this.msg)
  }
}
</script>