---
layout: page
permalink: /publications/
title: Publications
description: "(∗: Eequal contributions, †: Corresponding authors)"
nav: true
nav_order: 3
display_title: true
publication_preview_col_sm: 3
publication_entry_col_sm: 9
publication_preview_size_px: 500
---

<!-- Bibsearch Feature -->
<!-- {% include bib_search.liquid %} -->

<div class="publications">

{% bibliography --file preprints.bib %}

{% bibliography --query @*[year >= 2022]* %}

<h2 class="bibliography collapsible-header" onclick="togglePublications()">
  Before 2022 
  <i class="ti ti-chevron-right toggle-arrow" id="toggle-arrow"></i>
</h2>
<div id="old-publications" style="display: none;">
{% bibliography --group_by none --query @*[year <= 2021]* --sort_by year --order descending %}
</div>

<script>
function togglePublications() {
  const content = document.getElementById('old-publications');
  const arrow = document.getElementById('toggle-arrow');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.classList.remove('ti-chevron-right');
    arrow.classList.add('ti-chevron-down');
  } else {
    content.style.display = 'none';
    arrow.classList.remove('ti-chevron-down');
    arrow.classList.add('ti-chevron-right');
  }
}

function togglePatents() {
  const content = document.getElementById('patents-publications');
  const arrow = document.getElementById('patents-arrow');
  if (content.style.display === 'none') {
    content.style.display = 'block';
    arrow.classList.remove('ti-chevron-right');
    arrow.classList.add('ti-chevron-down');
  } else {
    content.style.display = 'none';
    arrow.classList.remove('ti-chevron-down');
    arrow.classList.add('ti-chevron-right');
  }
}
</script>

<h2 class="bibliography collapsible-header" onclick="togglePatents()">
  Patents 
  <i class="ti ti-chevron-right toggle-arrow" id="patents-arrow"></i>
</h2>
<div id="patents-publications" class="no-preview-bib" style="display: none;">
{% bibliography --file patents.bib --group_by none --sort_by year --order descending %}
</div>

</div>
