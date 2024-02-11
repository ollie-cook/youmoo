import { Inter, Roboto_Slab } from "next/font/google";
import localFont from 'next/font/local';

export const inter = Inter({ subsets: ["latin"] });
export const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export const myFont = localFont({
  src: './ProtestRiot-Regular.ttf',
  display: 'swap',
})