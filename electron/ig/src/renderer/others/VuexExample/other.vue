<template>
  <div>
    <ul>
      <li v-for="(item, index) in selfList" :key="index">{{ item }}</li>
    </ul>
    <div>
      <input v-model.number="item" type="text">
      <input type="button" value="增加" @click="addItem" />
    </div>
    <ul>
      <li v-for="(item, index) in list" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { MUTATION_ADD_LIST, ACTION_ADD_LIST } from '@/store/type'

export default {
  data () {
    return {
      item: ''
    }
  },

  computed: {
    /* list () {
      return this.$store.state.myList.list
    }, */

    ...mapState({
      list (state) {
        return state.myList.list
      }
    }),

    ...mapGetters({
      selfList: 'evenList'
    })
  },

  mounted () {
    document.body.style.background = '#fff'

    // console.log(this.$store)
  },

  methods: {
    ...mapMutations({
      mutationAddItem: MUTATION_ADD_LIST
    }),

    ...mapActions({
      actionAddItem: ACTION_ADD_LIST
    }),

    addItem () {
      this.mutationAddItem(this.item)
    }
  }
}
</script>
