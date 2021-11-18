import type { AppProps } from "next/app"
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
import "tailwindcss/tailwind.css"

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
