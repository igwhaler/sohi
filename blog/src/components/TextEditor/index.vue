<template>
  <div class="text-editor">
    <editor id='tinymce' v-model='tinymceHtml' :init='init'></editor>
  </div>
</template>

<script>
import tinymce from 'tinymce/tinymce'
import 'tinymce/themes/modern/theme'
import Editor from '@tinymce/tinymce-vue'

import 'tinymce/plugins/advlist'
import 'tinymce/plugins/anchor'
import 'tinymce/plugins/autolink'
import 'tinymce/plugins/autoresize'
import 'tinymce/plugins/bbcode'
import 'tinymce/plugins/charmap'
import 'tinymce/plugins/code'
import 'tinymce/plugins/codesample'
import 'tinymce/plugins/colorpicker'
import 'tinymce/plugins/contextmenu'
import 'tinymce/plugins/directionality'
import 'tinymce/plugins/emoticons'
import 'tinymce/plugins/hr'
import 'tinymce/plugins/image'
import 'tinymce/plugins/imagetools'
import 'tinymce/plugins/importcss'
import 'tinymce/plugins/preview'

import 'tinymce/plugins/link'
import 'tinymce/plugins/table'
import 'tinymce/plugins/lists'
import 'tinymce/plugins/wordcount'
import 'tinymce/plugins/textcolor'

export default {
  name: 'TextEditor',
  components: {
    Editor
  },
  data () {
    return {
      tinymceHtml: '请输入内容',
      init: {
        language_url: '/static/tinymce/langs/zh_CN.js',
        language: 'zh_CN',
        skin_url: '/static/tinymce/skins/lightgray',
        height: 600,
        menubar: 'edit insert view format table tools',
        plugins: 'advlist anchor autolink autoresize bbcode charmap code codesample colorpicker contextmenu directionality emoticons hr image imagetools importcss link lists preview table textcolor wordcount',
        toolbar: 'fontsizeselect | bold italic underline strikethrough forecolor backcolor | alignleft aligncenter alignright alignjustify | bullist numlist | outdent indent blockquote | link unlink image codesample',
        branding: false
      }
    }
  },
  mounted () {
    tinymce.init({})
  }
}
</script>

<style>
.text-editor {
  margin-top: 200px;
}
</style>
