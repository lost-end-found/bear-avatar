import { prompts } from "@/core/utils/prompts";
import { GetServerSidePropsContext } from "next";
import { TPrompt } from "./prompts/dreambooth/[slug]";

function SiteMap() {}

function generateSiteMap(prompts: TPrompt[]) {
  return `<?xml version="1.0" encoding="UTF-8"?>
   <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
     <url>
       <loc>https://aivatar.studio</loc>
     </url>
     <url>
       <loc>https://aivatar.studio/terms</loc>
     </url>
      <url>
       <loc>https://aivatar.studio/faq</loc>
     </url>
     <url>
       <loc>https://aivatar.studio/prompts</loc>
     </url>
     <url>
       <loc>https://aivatar.studio/how-it-works</loc>
     </url>
     ${prompts
       .map(({ slug }) => {
         return `
       <url>
           <loc>https://aivatar.studio/prompts/dreambooth/${slug}</loc>
       </url>
     `;
       })
       .join("")}
   </urlset>
 `;
}

export async function getServerSideProps({ res }: GetServerSidePropsContext) {
  const sitemap = generateSiteMap(prompts);

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
}

export default SiteMap;
