---
title: My Eleventy Project for Friendlies
layout: base.njk
---

## My posts

<ul>
{% for post in collections.general %}
  <li>{{ post.data.title }}</li>
{% endfor %}
</ul>
