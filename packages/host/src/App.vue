<template>
  <Header/>
  <!-- <ContainLog/>
  <ContainText/>
  <ContainUser/> -->
  
</template>

<script>
import Header from 'remote/Header';
import ContainLog from '../../log/src/ContainLog.vue';
import ContainText from '../../role/src/ContainText.vue';
import ContainUser from '../../remote/src/ContainUser.vue';

export default{
  
  components:{
    Header,
    ContainLog,
    ContainText,
    ContainUser,
  }
}

</script>