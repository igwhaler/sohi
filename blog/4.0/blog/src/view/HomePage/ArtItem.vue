<template>
  <div class="art-item">
    <div class="article clearfix">
      <div class="article-date">
        <a class="article-day" href="javascript:;">{{(new Date(article.created)).getDate()}}</a>
        <a class="article-year" href="javascript:;">{{(new Date(article.created)).getMonth() + 1}}</a>
      </div>
      <div class="article-main">
        <div class="article-content">
          <h2>
            <a href="javascript:;">{{article.title}}</a>
          </h2>
          <p>{{article.summary}}</p>
          <img v-if="article.cover" :src="article.cover" :alt="article.title">
        </div>
        <div class="more">
          <a href="/">更多>>></a>
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
  }
}
</script>

<style lang="less" scoped>
.article {
  padding: 25px 30px;
  background: #fff;
  .article-date {
    float: left;
    a {
      display: block;
      transition: 0.3s;
      &:hover {
        color: #4d4d4d;
        border-color: #4d4d4d;
      }
    }
    .article-day {
      width: 70px;
      height: 70px;
      border: 5px solid #828d95;
      line-height: 70px;
      text-align: center;
      color: #828d95;
      font-size: 40px;
      border-radius: 50%;
    }
    .article-year {
      text-align: center;
      font-size: 24px;
      line-height: 1.5em;
      color: #c0c0c0;
    }
  }
  .article-main {
    margin-left: 105px;
    .article-content {
      h2 {
        font-weight: normal;
        a {
          font-size: 26px;
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
