<template>
  <div class="user-comment">
    <div class="g-comment-list">
      <ul>
        <li v-for="(comment, index) in commentList" class="comment" :key="index">
          <div class="name">
            <img src="../../../../assets/images/header.png">
            <span>{{comment.name}}</span>
          </div>
          <div class="time">{{comment.created | getCommentTime}}</div>
          <p class="content">{{comment.content}}</p>
        </li>
      </ul>
    </div>

    <div class="g-comment">
      <h2>发表评论</h2>
      <div class="g-textarea">
        <textarea v-model="comment.content" rows="5" maxlength="200" placeholder="最多输入200字"></textarea>
      </div>

      <div class="g-input">
        <span class="label">姓名:</span>
        <input v-model="comment.name" type="text" maxlength="20">
      </div>

      <div class="g-input">
        <span class="label">邮箱:</span>
        <input v-model="comment.mail" type="text" maxlength="20">
      </div>

      <div class="g-btn">
        <a href="javascript:;" @click="submitComment">提交评论</a>
        <p class="g-error">{{errorMsg}}</p>
        <p class="g-success">{{successMsg}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export { default } from './js/index.js'
</script>

<style lang="less">
.user-comment {
  padding-bottom: 20px;
  .g-comment-list {
    .comment {
      color: #2c3f51;
      padding: 20px 0;
      border-bottom: 1px solid #eee;
      .name {
        margin-bottom: 4px;
        font-size: 18px;
        overflow: hidden;
        img {
          float: left;
          margin-right: 2px;
          width: 24px;
        }
      }
      .time {
        margin-bottom: 10px;
        font-size: 12px;
        font-style: italic;
      }
      .content {
        font-size: 15px;
        line-height: 1.5em;
        word-break: break-all;
      }
    }
  }
  .g-comment {
    padding-top: 20px;
    h2 {
      font-size: 18px;
      color: #555;
    }
    textarea,
    input {
      color: #666;
      border: 1px solid #ccc;
      border-radius: 3px;
      outline: none;
      transition: 0.3s;
      &:focus {
        border-color: #4d4d4d;
      }
    }
    .g-textarea {
      margin: 10px 0;
      textarea {
        max-width: 100%;
        min-width: 100%;
        padding: 8px 10px;
        font-size: 14px;
        line-height: 1.5em;

      }

    }
    .g-input  {
      padding: 4px 0;
      .label {
        font-size: 16px;
        color: #666;
      }
      input {
        box-sizing: border-box;
        padding: 0 6px;
        width: 100%;
        line-height: 32px;
        font-size: 16px;
      }
    }
    .g-btn {
      margin-top: 10px;
      a {
        display: inline-block;
        padding: 10px 30px;
        color: #fff;
        background-color: #828d95;
        transition: 0.3s;
        border-radius: 3px;
        &:hover {
          background-color: #4d4d4d;
        }
      }
    }
    .g-error,
    .g-success {
      padding-left: 10px;
      display: inline-block;
      line-height: 40px;
      font-size: 12px;
    }
    .g-error {
      color: red;
    }
    .g-success {
      color: green;
    }
  }
}

@media screen and (min-width: 800px) {
  .user-comment {
    .g-comment {
      .g-input {
        input {
          width: 300px;
        }
      }
    }
  }
}
</style>
