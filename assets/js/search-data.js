// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-team",
          title: "Team",
          description: "&#39;&#39;Iron sharpens iron, and one man sharpens another.&#39;&#39; - Proverbs 27:17",
          section: "Navigation",
          handler: () => {
            window.location.href = "/people/";
          },
        },{id: "nav-publications",
          title: "Publications",
          description: "(∗: Eequal contributions, †: Corresponding authors)",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-teaching",
          title: "Teaching",
          description: "&#39;&#39;Instruct the wise, and they will be even wiser. Teach the righteous, and they will learn even more.&#39;&#39; - Proverbs 9:9",
          section: "Navigation",
          handler: () => {
            window.location.href = "/teaching/";
          },
        },{id: "news-a-paper-about-modeling-cumulative-arm-fatigue-in-mid-air-interaction-is-accepted-to-international-journal-of-human-computer-studies-ijhcs",
          title: 'A paper about “Modeling Cumulative Arm Fatigue in Mid-Air Interaction” is accepted to...',
          description: "",
          section: "News",},{id: "news-a-paper-about-structural-and-temporal-cross-modal-distillation-is-accepted-to-neurips-2023",
          title: 'A paper about “Structural and Temporal Cross-Modal Distillation” is accepted to NeurIPS 2023....',
          description: "",
          section: "News",},{id: "news-a-paper-about-cross-modal-and-domain-adversarial-adaptation-is-accepted-to-aaai-2024",
          title: 'A paper about “Cross-Modal and Domain Adversarial Adaptation” is accepted to AAAI 2024....',
          description: "",
          section: "News",},{id: "news-two-papers-about-unified-domain-generalization-amp-amp-adaptation-and-online-hd-map-construction-are-accepted-to-neurips-2024",
          title: 'Two papers about “Unified Domain Generalization &amp;amp;amp; Adaptation” and “Online HD-Map Construction” are...',
          description: "",
          section: "News",},{id: "news-a-paper-about-efficient-3d-occupancy-prediction-is-accepted-to-cvpr-2025",
          title: 'A paper about “Efficient 3D Occupancy Prediction” is accepted to CVPR 2025.',
          description: "",
          section: "News",},{id: "news-a-paper-about-test-time-adaptation-for-online-vision-language-navigation-is-accepted-to-icml-2025",
          title: 'A paper about “Test-Time Adaptation for Online Vision-Language Navigation” is accepted to ICML...',
          description: "",
          section: "News",},{id: "news-a-paper-about-active-test-time-vision-language-navigation-is-accepted-to-neurips-2025",
          title: 'A paper about “Active Test-time Vision-Language Navigation” is accepted to NeurIPS 2025.',
          description: "",
          section: "News",},{id: "news-a-paper-about-a-dynamic-action-model-based-vision-language-action-framework-for-robot-manipulation-is-accepted-to-icra-2026",
          title: 'A paper about “A Dynamic Action Model-Based Vision-Language-Action Framework for Robot Manipulation” is...',
          description: "",
          section: "News",},{id: "news-human-centered-physical-intelligence-hpi-lab-is-officially-opened-at-the-department-of-artificial-intelligence-hanyang-university-erica",
          title: 'Human-centered Physical Intelligence (HPI) Lab is officially opened at the Department of Artificial...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "teachings-deep-learning",
          title: 'Deep Learning',
          description: "",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/deep-learning-cse4048.html";
            },},];
