import { writable } from "svelte/store";

export const ShieldStyle = [
  'flat',
  'flat-square',
  'for-the-badge',
  'plastic',
  'social',
]

export interface DynamicShieldProps {
  url: string;
  query: string;
  prefix?: string;
  suffix?: string;
}

export interface ShiledProps {
  label?: string;
  message?: string;
  color?: string;
  logo?: string;
  style?: string;
  dynamic?: DynamicShieldProps;
}

export const shield = writable<ShiledProps>({
  label: 'label',
  message: 'message',
  color: '#0F80C1',
  logo: '',
  style: '',
  dynamic: {
    url: '',
    query: '',
    prefix: '',
    suffix: ''
  }
})

export const dynamic = writable(false);