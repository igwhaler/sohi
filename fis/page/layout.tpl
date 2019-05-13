{%html framework="/static/lib/mod.js"%}
    {%head%}
        <title>demo</title>
    {%/head%}
    {%body%}
        <div class="wrapper">
          {%*
          定义区域 header
          *%}
          {%block name="header"%}
            {%widget name="/widget/header/header.tpl"%}
          {%/block%}

          {%*
          定义区域 main
          *%}
          <div class="body">{%block name="main"%}{%/block%}</div>

          {%*
          定义区域 footer
          *%}
          {%block name="footer"%}
            {%widget name="/widget/footer/footer.tpl"%}
          {%/block%}
        </div>
    {%/body%}
{%/html%}
