<template>
  <div class="home-view has-header">
    <List mold="thumbnail" :items="events"></List>
    <infinite-loading :on-infinite="onInfinite" ref="infiniteLoading">
      <loading slot="spinner"></loading>
    </infinite-loading>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import InfiniteLoading from 'vue-infinite-loading'
import List from '../components/List'
import Loading from '../components/Loading'

export default {
  name: 'home-view',
  components: {  List, InfiniteLoading, Loading },
  data () {
    return {}
  },
  computed: {
  	getEvent(){
  		this.getEvent();
  	},
    ...mapState({
      events: state => state.activities.events
    })
  },
  methods: {
    onInfinite () {
      setTimeout(() => {
        this.loadMore()
        this.$refs.infiniteLoading.$emit('$InfiniteLoading:loaded')
      }, 1000)
    },
    ...mapActions([
      'loadMore',
      'getEvent'
    ])
  }
}
</script>

<style lang="scss" scoped>
.sub-nav {
  margin: 0 1.8rem;
  padding-top: 0.2rem;
}
</style>
