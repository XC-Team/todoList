<template>
  <footer :class="$style.mainFooter">
      <span>Written by {{this.author}}</span>
  </footer>
</template>
<script>
  export default {
    data () {
      return {
        author: 'Jomsou'
      }
    }
  }
</script>
<style lang="stylus" module>
.main-footer {
  margin-top: 40px;
  text-align: center;
  color: #bfbfbf;
  font-size: 25px;
  text-shadow: 0 1px 0 rgba(255, 255, 255, 0.5);
}
</style>
