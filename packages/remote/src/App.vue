<template>
  <Header/>
  <!-- <div class="text-3xl mx-auto max-w-6xl">
    <div>Welcome to User Page</div>
  </div> -->
  <ContainUser/>
</template>

<script>
import Header from "./Header.vue"
import ContainUser from "./ContainUser.vue";

export default{
  components:{
    Header,
    ContainUser
  }
}
</script>