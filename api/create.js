---
layout: null
category: create
fields:
  - title
  - organization_name
  - organization_description
  - organization_website
  - organization_twitter
  - organization_facebook
  - organization_instagram
  - organization_activity
  - project_image
  - project_video
  - project_description
  - project_is_collaboration
  - project_collaborators
  - project_applying
  - project_areas
  - project_measure
  - project_proposal_help
  - project_proposal_description
  - project_proposal_impact
  - project_proposal_best_place
  - link_newsletter
  - link_volunteer
  - link_donate
  - category
  - uri
---

{% assign data_collection = site.collections | where: "label", page.category | first %}
{% assign data_list = data_collection.docs %}

window._activation_la2050      = window._activation_la2050      || {}
window._activation_la2050.data = window._activation_la2050.data || {}

window._activation_la2050.data.{{ page.category }} = [

{% for data in data_list %}
{
  {% for field in page.fields %}
  {{ field }}: {{ data[field] | jsonify }}{% unless forloop.last %},{% endunless %}
  {% endfor %}
}{% unless forloop.last %},{% endunless %}
{% endfor %}

];
