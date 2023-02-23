<template>
  <!-- <Header/>
  <div class="mt-10 text-3xl mx-auto max-w-6xl">
    <div>Welcome to Log Page</div>
  </div> -->
  <ContainLog/>
</template>

<script>
import Header from 'remote/Header';
import ContainLog from "./ContainLog.vue"

export default{
  components:{
    Header,
    ContainLog
  }
}
</script>