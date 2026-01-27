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
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-a-paper-about-cross-modal-and-domain-adversarial-adaptation-is-accepted-to-aaai-2024",
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
          section: "News",},{id: "news-human-centered-physical-intelligence-hpi-lab-is-officially-opened-at-the-department-of-artificial-intelligence-hanyang-university-erica",
          title: 'Human-centered Physical Intelligence (HPI) Lab is officially opened at the Department of Artificial...',
          description: "",
          section: "News",},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project.html";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project.html";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project.html";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project.html";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project.html";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project.html";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project.html";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project.html";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project.html";
            },},{id: "teachings-data-science-fundamentals",
          title: 'Data Science Fundamentals',
          description: "This course covers the foundational aspects of data science, including data collection, cleaning, analysis, and visualization. Students will learn practical skills for working with real-world datasets.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/data-science-fundamentals.html";
            },},{id: "teachings-introduction-to-machine-learning",
          title: 'Introduction to Machine Learning',
          description: "This course provides an introduction to machine learning concepts, algorithms, and applications. Students will learn about supervised and unsupervised learning, model evaluation, and practical implementations.",
          section: "Teachings",handler: () => {
              window.location.href = "/teachings/introduction-to-machine-learning.html";
            },},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
