<template>
  <div>
    <div>
      <p>{{ localNumber }}</p>
      <p>{{ count }}</p>
      <p>{{ countAlias }}</p>
      <p>{{ countPlusState }}</p>
      <input type="button" value="增加" @click="increment" />
    </div>

    <div>
      <ul>
        <li v-for="(item, index) in selfList" :key="index">{{ item }}</li>
      </ul>
      <div>
        <input v-model.number="item" type="text">
        <input type="button" value="增加" @click="addItem" />
      </div>
    </div>
    <ul>
      <li v-for="(item, index) in evenList" :key="index">{{ item }}</li>
    </ul>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
import { MUTATION_NUMBER_INCREMENT, MUTATION_ADD_LIST, ACTION_ADD_LIST } from '@/store/type'

export default {
  data () {
    return {
      number: 10,
      item: ''
    }
  },

  /* computed: {
    count () {
      return this.$store.state.count
    }
  }, */

  computed: {
    localNumber () {
      return 123
    },

    ...mapState({
      count: state => state.count,

      countAlias: 'count',

      countPlusState (state) {
        return this.number + state.count
      }
    }),

    ...mapGetters({
      evenList: 'evenList'
    }),

    selfList () {
      let { getters } = this.$store
      return getters.getSelfList(3)
    }
  },

  // computed: mapState(['count']),

  mounted () {
    document.body.style.background = '#fff'

    console.log(this.$store)
  },

  methods: {
    increment () {
      this.$store.commit(MUTATION_NUMBER_INCREMENT)
    },

    addItem () {
      // this.$store.commit(MUTATION_ADD_LIST, this.item)
      // this.addVuexItem(this.item)
      // this.$store.dispatch(ACTION_ADD_LIST, this.item)

      this.addActionItem(this.item)
    },

    ...mapMutations({
      addVuexItem: MUTATION_ADD_LIST
    }),

    ...mapActions({
      addActionItem: ACTION_ADD_LIST
    })
  }
}
</script>
