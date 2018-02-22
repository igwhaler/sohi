<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>News</title>

  <link rel="stylesheet" href="../../public/css/news.css">
</head>

<body>
  <div class="news-view view">
    {% for item in list %}
      <div class="item">
        <a href="{{ item.url }}">{{ item.title }}</a>
      </div>
    {% endfor %}
  </div>
</body>

</html>