<template>
  <div></div>
</template>

<script>
import * as math from 'mathjs'

export default {
  name: 'MathJs',
  data () {
    return {}
  },

  mounted () {
    console.log(math)

    let result = math.add(0.1, 0.2)
    console.log(math.number(math.format(result, {precision: 14})))
  }
}
</script>
