import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "DiffGeoTopo's Blog",
    enableSPA: true,
    enablePopovers: true,
    analytics: { provider: "plausible" },
    locale: "en-US",
    baseUrl: "diffgeotopo.github.io",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "created",
    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
      light: "transparent",
      lightgray: "#4a4a4a",
      gray: "#646464", 
      
      // BODY TEXT: Changed from White to Deep Indigo
      // This is dark enough to read on the pastel sky, but still colorful.
      darkgray: "#1a0b2e",        
      
      // HEADERS: Kept Neon Purple (Matches the Indigo text well)
      dark: "#c77dff",            
      
      // LINKS: Kept Hot Pink
      secondary: "#ff79c6",       
      
      tertiary: "#8be9fd",
      highlight: "rgba(199, 125, 255, 0.2)",
    },
        darkMode: {
          light: "#0a0f14",
          lightgray: "#1c2b36",
          gray: "#546e7a",
          darkgray: "#eceff1",
          dark: "#80deea",
          secondary: "#00e5ff",
          tertiary: "#18ffff",
          highlight: "rgba(0, 229, 255, 0.15)",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({ priority: ["frontmatter", "filesystem"] }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.TableOfContents(),
      Plugin.CrawlLinks({ markdownLinkResolution: "shortest" }),
      Plugin.Description(),
      Plugin.Latex({ renderEngine: "katex" }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({ enableSiteMap: true, enableRSS: true }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}
export default config