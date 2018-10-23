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
            <nuxt-link :to="`/article?id=${article.id}`">{{article.title}}</nuxt-link>
          </h2>
          <p>{{article.summary}}</p>
          <div v-if="article.cover" class="g-cover">
            <nuxt-link :to="`/article?id=${article.id}`">
              <img :src="article.cover" :alt="article.title">
            </nuxt-link>
          </div>
        </div>
        <div class="more">
          <nuxt-link :to="`/article?id=${article.id}`">更多>>></nuxt-link>
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
  background: #fdfdfd;
  // box-shadow: 0 0 10px 3px #606470;
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
      line-height: 60px;
      text-align: center;
      color: #828d95;
      font-size: 34px;
      border-radius: 50%;
    }
    .month,
    .year {
      text-align: center;
      font-size: 18px;
      line-height: 1.5em;
      color: #c0c0c0;
    }
  }
  .article-main {
    margin-left: 95px;
    .content {
      h2 {
        font-weight: normal;
        a {
          font-size: 20px;
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
      .g-cover {
        margin: 10px 0 20px;
        overflow: hidden;
        &:hover {
          img {
            transform: scale(1.15);
          }
        }
        img {
          transition: 0.6s ease-in-out;
        }
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
