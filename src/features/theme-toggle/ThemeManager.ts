const arr_theme = [
    "body",
    "#name",
    ".dot-pattern",
    ".hi",
    ".text-main",
    ".background-main",
    ".avatar-container",
    "#introduce-avatar",
    ".about-achie-box-content",
    ".percent-nonslider-skill",
    ".nonslider-skill-detail",
    ".title-section",
    ".elementor-spacer-inner",
    ".detail-box-project",
    ".box-contact",
    "#footer",
    "#header",
    "#menu-bar",
    ".head-box-skill",
    "#job",
    ".element-icon",
    "#animation-job",
    "#count",
    ".certificate-container-gallery",
    ".certificate-container-indicator",
];

const change_img_theme: Record<string, [string, string]> = {
    "#logo-header img": [
        `${import.meta.env.BASE_URL}assets/logo/VS_logo.png`,
        `${import.meta.env.BASE_URL}assets/logo/VS_logo_dark.png`
    ],
    "#contact .logo-contact img": [
        `${import.meta.env.BASE_URL}assets/logo/logo.png`,
        `${import.meta.env.BASE_URL}assets/logo/logo_dark.png`
    ],
    "#introduce-avatar img": [
        `${import.meta.env.BASE_URL}assets/images/avatar_original_3.JPG`,
        `${import.meta.env.BASE_URL}assets/images/avatar_dark.JPG`
    ]
};

export function setupInitialThemeClasses() {
  arr_theme.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      const htmlEl = el as HTMLElement;
      if (selector === "#header") {
        htmlEl.style.transition = "color 0.5s, background-color 0.5s, border-color 0.5s, left 0.6s";
      } else {
        htmlEl.style.transition = "color 0.5s, background-color 0.5s, border-color 0.5s";
      }
      if (!htmlEl.classList.contains('light') && !htmlEl.classList.contains('dark')) {
         htmlEl.classList.add('light');
      }
    });
  });
}

export function applyTheme(isDark: boolean) {
  const themeIndex = isDark ? 1 : 0;
  
  arr_theme.forEach(selector => {
    const elements = document.querySelectorAll(selector);
    elements.forEach(el => {
      if (isDark) {
        el.classList.add("dark");
        el.classList.remove("light");
      } else {
        el.classList.add("light");
        el.classList.remove("dark");
      }
    });
  });

  for (const query in change_img_theme) {
    const elements = document.querySelectorAll(query);
    elements.forEach(el => {
      (el as HTMLImageElement).src = change_img_theme[query][themeIndex];
    });
  }
}
