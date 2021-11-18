import { InjectedConnector } from "@web3-react/injected-connector"
import { Web3Provider } from "@ethersproject/providers"
import { useWeb3React } from "@web3-react/core"

export const injectedConnector = new InjectedConnector({
  supportedChainIds: [
    1, // Mainet
    3, // Ropsten
    4, // Rinkeby
    5, // Goerli
    42, // Kovan
  ],
})

export const Wallet = () => {
  const { account, activate, active } = useWeb3React<Web3Provider>()

  const onClick = () => {
    activate(injectedConnector)
  }

  return (
    <div className="flex flex-col w-full h-full justify-center items-center space-y-5 whitespace-normal">
      {active ? (
        <>
          <div className="text-center text-gray-600 break-all">
            <span className="font-bold text">
              Account: <br />
            </span>
            {account}
          </div>
          <p className="text-gray-600 break-all">Logged In ✅</p>
        </>
      ) : (
        <button
          className="bg-gray-900 py-4 px-6 rounded-full text-white font-semibold"
          type="button"
          onClick={onClick}
        >
          Connect to MetaMask
        </button>
      )}
    </div>
  )
}
