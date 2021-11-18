import { Web3ReactProvider } from "@web3-react/core"
import { Web3Provider } from "@ethersproject/providers"
import { Wallet } from "components/Wallet"
import { Balance } from "components/Balance"

function getLibrary(provider: any): Web3Provider {
  const library = new Web3Provider(provider)
  library.pollingInterval = 12000
  return library
}

export default function Home() {
  return (
    <Web3ReactProvider getLibrary={getLibrary}>
      <div className="flex h-screen w-full justify-center items-center">
        <div className="bg-gray-200 rounded-md shadow-md h-96 w-96 px-16 flex flex-col justify-around items-center">
          <Wallet />
          <Balance />
        </div>
      </div>
    </Web3ReactProvider>
  )
}
