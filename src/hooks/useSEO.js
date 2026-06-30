import { useEffect } from 'react';

/**
 * Custom hook to dynamically update document title and SEO/GEO/OpenGraph meta tags in the head.
 * Injects structured JSON-LD schema dynamically.
 */
export default function useSEO({
  title,
  description,
  keywords,
  canonical,
  schema,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
}) {
  useEffect(() => {
    // 1. Update Title
    if (title) {
      document.title = title;
    }

    // Helper function to update or create meta tags
    const updateMetaTag = (attrName, attrValue, content) => {
      if (content === undefined || content === null) return;
      let element = document.querySelector(`meta[${attrName}="${attrValue}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrValue);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Update Description
    updateMetaTag('name', 'description', description);

    // 3. Update Keywords
    updateMetaTag('name', 'keywords', keywords);

    // 4. Update Canonical Link
    if (canonical) {
      let link = document.querySelector('link[rel="canonical"]');
      if (!link) {
        link = document.createElement('link');
        link.setAttribute('rel', 'canonical');
        document.head.appendChild(link);
      }
      link.setAttribute('href', canonical);
    }

    // 5. Update Open Graph Tags
    updateMetaTag('property', 'og:title', ogTitle || title);
    updateMetaTag('property', 'og:description', ogDescription || description);
    updateMetaTag('property', 'og:url', ogUrl || canonical);
    if (ogImage) {
      updateMetaTag('property', 'og:image', ogImage);
    }

    // 6. Update Twitter Tags
    updateMetaTag('name', 'twitter:title', ogTitle || title);
    updateMetaTag('name', 'twitter:description', ogDescription || description);
    if (ogImage) {
      updateMetaTag('name', 'twitter:image', ogImage);
    }

    // 7. Update JSON-LD Schema
    let schemaScript = document.getElementById('dynamic-json-ld');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'dynamic-json-ld';
        schemaScript.setAttribute('type', 'application/ld+json');
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    // Cleanup script on unmount/re-run to prevent duplicate or mismatched schemas
    return () => {
      const script = document.getElementById('dynamic-json-ld');
      if (script) {
        script.remove();
      }
    };
  }, [title, description, keywords, canonical, schema, ogTitle, ogDescription, ogImage, ogUrl]);
}
