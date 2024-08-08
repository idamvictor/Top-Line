import { Manrope, Poppins } from "next/font/google";
import localFont from "next/font/local";

export const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});
export const poppins= Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});

export const freizeit_trial_thin = localFont({
  src: "../../../public/fonts/FreizeitTrial-Thin.otf",
  variable: "--font-freizeit_trial_thin",
});
export const freizeit_trial_light = localFont({
  src: "../../../public/fonts/FreizeitTrial-Light.otf",
  variable: "--font-freizeit_trial_light",
});
export const freizeit_trial_extralight = localFont({
  src: "../../../public/fonts/FreizeitTrial-ExtraLight.otf",
  variable: "--font-freizeit_trial_extralight",
});
export const freizeit_trial_regular = localFont({
  src: "../../../public/fonts/FreizeitTrial-Regular.otf",
  variable: "--font-freizeit_trial_regular",
});
export const freizeit_trial_medium = localFont({
  src: "../../../public/fonts/FreizeitTrial-Medium.otf",
  variable: "--font-freizeit_trial_medium",
});
export const freizeit_trial_bold = localFont({
  src: "../../../public/fonts/FreizeitTrial-Bold.otf",
  variable: "--font-freizeit_trial_bold",
});
export const freizeit_trial_extrabold = localFont({
  src: "../../../public/fonts/FreizeitTrial-ExtraBold.otf",
  variable: "--font-freizeit_trial_extrabold",
});