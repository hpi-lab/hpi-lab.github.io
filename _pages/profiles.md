---
layout: profiles
permalink: /people/
title: Team
description: "<em>''Iron sharpens iron, and one man sharpens another.''</em> - Proverbs 27:17"
nav: true
nav_order: 2

# Control sizes (in pixels)
prof_image_size: 300
student_image_size: 150
profile_card_min_width: 200

sections:
  - title: Professor
    people:
      - name: Sujin Jang
        image: profiles/sujin_jang.png
        image_circular: false
        # url: https://sujinj.com/
        # google_scholar: https://scholar.google.com/citations?hl=en&user=JiKV0wUAAAAJ&view_op=list_works&sortby=pubdate
        content: profiles/about_sujin_jang.md

  - title: Graduate Students (See Openings)
  #   people:
  #     - name: Jane Doe
  #       image: profiles/blank_profile.png
  #       content: profiles/about_graduate_student.md

  - title: Undergraduate Students
    people:
    - name: Minchan Kim
      image: profiles/minchan_kim.jpg
      content: profiles/about_minchan_kim.md

    - name: Gisu Park
      image: profiles/gisu_park.png
      content: profiles/about_gisu_park.md

    - name: Duyeon Won
      image: profiles/duyeon_won.png
      content: profiles/about_duyeon_won.md

    - name: Su Lee
      image: profiles/su_lee.jpg
      content: profiles/about_su_lee.md

    - name: Sangho Jung
      image: profiles/sangho_jung.png
      content: profiles/about_sangho_jung.md

  - title: External Advisees
    people:
      - name: Jiwon Lee
        image: profiles/jiwon_lee.jpg
        content: profiles/about_jiwon_lee.md

      - name: Jinhyuk Choi
        image: profiles/jinhyuk_choi.jpg
        content: profiles/about_jinhyuk_choi.md
---

<style>
  .people-grid {
    --prof-img-size: {{ page.prof_image_size }}px;
    --prof-img-size-mobile: {{ page.prof_image_size }}px;
    --student-img-size: {{ page.student_image_size }}px;
    --profile-card-min-width: {{ page.profile_card_min_width }}px;
  }
</style>
