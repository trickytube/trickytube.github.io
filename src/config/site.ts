const siteName = import.meta.env.PUBLIC_SITE_NAME;
const siteDesc = import.meta.env.PUBLIC_SITE_DESCRIPTION


export const siteConfig = {
    name: siteName || "News Site",
    description: siteDesc || "A news site",
};