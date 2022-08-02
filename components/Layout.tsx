import { NextSeo } from "next-seo";
import React, { FunctionComponent } from "react";
import { getMetaImage } from "../utils";

interface LayoutProps {
  site: any;
  children: React.ReactNode;
}

const Layout: FunctionComponent<LayoutProps> = ({
  site,
  children,
}: LayoutProps) => {
  const navLinks: any = [
    { name: "All Products", link: "/products" },
    { name: "Explore", link: "/tags" },
  ];

  return (
    <>
      <NextSeo
        title={`${site.name} | 100 users 100 days`}
        description="100 users 100 days"
        openGraph={{
          url: "https://100in100.launchman.io",
          title: site.name,
          description: "100 users 100 days",
          images: [
            {
              url: getMetaImage(`https://100in100.launchman.io`),
              width: 800,
              height: 600,
              alt: site.name,
              type: "image/jpeg",
            },
          ],
          site_name: site.name,
        }}
        additionalLinkTags={[
          {
            rel: "icon",
            href: site.logo,
          },
        ]}
      />
    </>
  );
};

export default Layout;
