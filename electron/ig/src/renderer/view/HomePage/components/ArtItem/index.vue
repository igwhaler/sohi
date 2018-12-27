<template>
  <div class="art-item">
    <div class="article clearfix">
      <!-- <div class="article-date">
        <span class="date day" href="javascript:;">{{article.created | getDate}}</span>
        <span class="date month" href="javascript:;">{{article.created | getYear}}-{{article.created | getMonth}}</span>
      </div> -->
      <div class="article-main">
        <div class="content">
          <h2>
            <router-link :to="`/article?id=${article.id}`">{{article.title}}</router-link>
          </h2>
          <p>{{article.summary}}</p>
          <div v-if="article.cover" class="g-cover">
            <router-link :to="`/article?id=${article.id}`">
              <img :src="article.cover" :alt="article.title">
            </router-link>
          </div>
        </div>
        <div class="more">
          <span class="time">{{article.created | getDateTime}}</span>
          <router-link :to="`/article?id=${article.id}`">更多>>></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import DateFormat from 'dateformat'

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
    },

    getDateTime (time) {
      return DateFormat(time, 'yyyy-mm-dd HH:MM:ss')
    }
  }
}
</script>

<style lang="less" scoped>
.article {
  padding: 16px;
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
    // margin-left: 95px;
    .content {
      h2 {
        font-weight: normal;
        a {
          font-size: 16px;
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
        margin: 10px 0 10px;
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
      .time {
        float: left;
        color: #828d95;
        font-size: 14px;
      }
      a {
        float: right;
        font-size: 14px;
        color: #828d95;
        transition: 0.3s;
        &:hover {
          color: #4d4d4d;
        }
      }
    }
  }
}

@media screen and (min-width: 800px) {
  .article {
    padding: 20px 30px 20px 34px;
    .article-main {
      .content {
        h2 {
          a {
            font-size: 20px;
          }
        }
        .g-cover {
          margin: 10px 0 20px;
        }
      }
    }
  }
}
</style>
