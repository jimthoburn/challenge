---
title: Help LA2050 determine how much of Los Angeles we’re reaching
canonical_url: /
body_class: lime
stylesheets:
  - "/assets/css/vote-survey.css"
---

{% if site.phase != 5 and site.voting_test_mode != true %}

# Oops!

<div class="introduction" markdown="1">
This page couldn’t be found.

You may want to visit our [home page](/) instead.
</div>

{% else %}

<div class="introduction" markdown="1">

<h2 style="max-width: none; text-align: center; font-size: inherit; color: var(--secondary-color); font-weight: 500;">Thanks for voting! <span style="font-weight: normal; color: rgb(41, 41, 41); /* @midnight */">Your votes have been received and will help us choose the winners.</span></h2>

<h1>Help LA2050 determine how much of Los Angeles we’re reaching</h1>
<p style="font-size: inherit;"><small style="font-size: inherit;">Providing this information is optional. You can <a href="/vote/confirmation/">skip this step</a>.</small></p>

</div>

{% include vote-survey.html %}

{% endif %}
