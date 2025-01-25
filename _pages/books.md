---
layout: page
title: Books
permalink: /books/
description: Some books I have read.
nav: true
nav_order: 4
horizontal: true
---
<!-- pages/books.md -->
<div class="books">
{%- if site.enable_book_categories and page.display_categories %}
  <!-- Display categorized projects -->
  {%- for category in page.display_categories %}
  <h2 class="category">{{ category }}</h2>
  {%- assign categorized_books = site.books | where: "category", category -%}
  {%- assign sorted_books = categorized_books | sort: "date" | reverse %}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for book in sorted_books -%}
      {% include books.liquid %}
    {%- endfor %}
  </div>
  {% endfor %}
{%- else -%}
<!-- Display projects without categories -->
  {%- assign sorted_books = site.books | sort: "date" | reverse -%}
  <!-- Generate cards for each project -->
  <div class="grid">
    {%- for book in sorted_books -%}
      {% include books.liquid %}
    {%- endfor %}
  </div>
{%- endif -%}
</div>