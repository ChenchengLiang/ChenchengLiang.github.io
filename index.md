---
layout: page
title: About
---
{% assign about_tab = site.tabs | where_exp: "tab", "tab.url == '/about/'" | first %}
{{ about_tab.content }}
