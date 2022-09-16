export type IconsId =
  | "brazil"
  | "english"
  | "french";

export type IconsKey =
  | "Brazil"
  | "English"
  | "French";

export enum Icons {
  Brazil = "brazil",
  English = "english",
  French = "french",
}

export const ICONS_CODEPOINTS: { [key in Icons]: string } = {
  [Icons.Brazil]: "61697",
  [Icons.English]: "61698",
  [Icons.French]: "61699",
};
