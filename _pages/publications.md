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

<h2 class="bibliography">Before 2022</h2>
{% bibliography --group_by none --query @*[year <= 2021]* --sort_by year --order descending %}

<!-- Patents -->
<hr>
<h1>Patents</h1>
<div class="no-preview-bib">
{% bibliography --file patents.bib --group_by none --sort_by year --order descending %}
</div>

</div>
