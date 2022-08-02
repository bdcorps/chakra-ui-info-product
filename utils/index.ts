export const capitalizeWord = (str: string) => {
  if (!str) { return ""; }
  const lower = str.toLowerCase();
  return str.charAt(0).toUpperCase() + lower.slice(1);
}

export const getMetaImage = (url: string) => {
  return `https://api.apiflash.com/v1/urltoimage?access_key=0ad2f396b0c645698320805a90698be3&wait_until=page_loaded&url=${encodeURIComponent(url)}`
}

export enum TemplateType {
  PODCAST1 = "podcast1",
  CURATION1 = "curation1",
  CONTENT1 = "content1",
  APP1 = "app1",
  TEMPLATES1 = "templates1",
  LANDING1 = "landing1"
}