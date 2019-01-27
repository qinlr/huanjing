<template>
  <div id="app">
    <div class="router"><router-view/></div>
    <div><Nav/></div>
  </div>
</template>

<script>
import Nav from './components/common/Nav';
export default {
  components:{Nav},
  name: 'App'
}
</script>
<style>
#app{
  display: flex;
}
#app .router{
flex: 1;
}
</style>



