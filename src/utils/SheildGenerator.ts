import type { ShiledProps } from "../store/shield";

export function staticShieldUrl(props: ShiledProps) {
  const baseProps = [
    omitEmpty(props.label),
    omitEmpty(props.message),
    omitEmpty(props.color.split('#')[1])
  ]
  const url = new URL('https://img.shields.io/badge/' + baseProps.join('-'));
  assignQuery(url, 'logo', props.logo);
  assignQuery(url, 'style', props.style);
  assignQuery(url, 'logo', props.logo);
  return url.toString();
}

const omitEmpty = (str: string) => str || '';
const assignQuery = 
  (url: URL, query: string, value: string) => value && url.searchParams.set(query, value);