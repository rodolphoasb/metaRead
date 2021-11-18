import { Web3Provider } from "@ethersproject/providers"
import { formatEther } from "@ethersproject/units"
import { useWeb3React } from "@web3-react/core"
import useSWR from "swr"
import Loader from "react-loader-spinner"

const fetcher =
  (library) =>
  (...args) => {
    const [method, ...params] = args
    console.log(method, params)
    return library[method](...params)
  }

export const Balance = () => {
  const { account, library, active } = useWeb3React<Web3Provider>()
  const { data: balance } = useSWR(["getBalance", account, "latest"], {
    fetcher: fetcher(library),
  })

  if (!active) {
    return <div></div>
  }

  if (!balance) {
    return (
      <div className="my-8 bg-green-500 w-72 h-20 text-center rounded-md shadow-md text-white font-bold text-2xl flex items-center justify-center">
        <span className="mr-8">Balance:</span>
        <Loader
          type="TailSpin"
          color="#fff"
          height={20}
          width={20}
          timeout={20000} //3 secs
        />
      </div>
    )
  }
  return (
    <div className="my-8 bg-green-500 w-72 h-20 text-center rounded-md shadow-md text-white font-bold text-2xl flex items-center justify-center">
      Balance: {parseFloat(formatEther(balance)).toPrecision(4)}
    </div>
  )
}
