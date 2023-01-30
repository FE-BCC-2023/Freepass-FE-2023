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
  return url.toString();
}

export function dynamicShieldUrl(props: ShiledProps) {
  const url = new URL('https://img.shields.io/badge/dynamic/json');
  assignQuery(url, 'label', props.label);
  assignQuery(url, 'color', props.color);
  assignQuery(url, 'logo', props.logo);
  assignQuery(url, 'style', props.style);
  assignQuery(url, 'url', props.dynamic.url);
  assignQuery(url, 'query', props.dynamic.query);
  assignQuery(url, 'prefix', props.dynamic.prefix);
  assignQuery(url, 'suffix', props.dynamic.suffix);
  return url.toString();
}

export const getShieldUrl = 
  (props: ShiledProps, dynamic = false) => dynamic 
  ? dynamicShieldUrl(props) 
  : staticShieldUrl(props)

const omitEmpty = (str: string) => str || '';
const assignQuery = 
  (url: URL, query: string, value: string) => value && url.searchParams.set(query, value);