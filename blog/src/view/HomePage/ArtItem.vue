<template>
  <div class="art-item">
    <div class="article clearfix">
      <div class="article-date">
        <span class="date day" href="javascript:;">{{article.created | getDate}}</span>
        <span class="date month" href="javascript:;">{{article.created | getYear}}-{{article.created | getMonth}}</span>
      </div>
      <div class="article-main">
        <div class="content">
          <h2>
            <router-link :to="`/article?id=${article.id}`">{{article.title}}</router-link>
          </h2>
          <p>{{article.summary}}</p>
          <img v-if="article.cover" :src="article.cover" :alt="article.title">
        </div>
        <div class="more">
          <router-link :to="`/article?id=${article.id}`">更多>>></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ArtItem',
  props: {
    article: {
      required: true,
      type: Object
    }
  },

  filters: {
    getDate (time) {
      let date = (new Date(time)).getDate()

      return date < 10 ? `0${date}` : date
    },

    getMonth (time) {
      let month = (new Date(time)).getMonth() + 1

      return month < 10 ? `0${month}` : month
    },

    getYear (time) {
      return (new Date(time)).getFullYear()
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  padding: 25px 30px;
  background: #fff;
  .article-date {
    float: left;
    .date {
      display: block;
      transition: 0.3s;
      /* &:hover {
        color: #4d4d4d;
        border-color: #4d4d4d;
      } */
    }
    .day {
      width: 70px;
      height: 70px;
      border: 5px solid #828d95;
      line-height: 70px;
      text-align: center;
      color: #828d95;
      font-size: 40px;
      border-radius: 50%;
    }
    .month,
    .year {
      text-align: center;
      font-size: 20px;
      line-height: 1.5em;
      color: #c0c0c0;
    }
  }
  .article-main {
    margin-left: 105px;
    .content {
      h2 {
        font-weight: normal;
        a {
          font-size: 24px;
          color: #4c4c4c;
          line-height: 1.5em;
          transition: 0.3s;
          &:hover {
            color: #828d95;
          }
        }
      }
      p {
        font-size: 14px;
        color: #737373;
        line-height: 1.5em;
      }
      img {
        margin: 20px 0;
      }
    }
    .more {
      overflow: hidden;
      a {
        float: right;
        font-size: 16px;
        color: #828d95;
        transition: 0.3s;
        &:hover {
          color: #4d4d4d;
        }
      }
    }
  }
}
</style>
