<template>
  <div id="Home">
      <Seacher />
      <Banner/>
  </div>
</template>

<script>
import Seacher from './Seacher'
import Banner from './Banner'
export default {
    components:{Seacher,Banner},
  name: 'Home',
  data(){
      return {}
  }
}
</script>
<style lang="less" scoped>

</style>
