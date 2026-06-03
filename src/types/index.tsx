import type { ElementType } from 'react';

export interface IHomeCard {
  name: string;
  desc: string;
}

export interface IAboutCard {
  title: string;
  desc: string;
  icon: ElementType;
  icons: ElementType[];
}

export interface IForm {
  name: string;
  email: string;
  message: string;
}
