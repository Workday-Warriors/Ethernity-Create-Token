'use client'

import { Inter } from 'next/font/google'
import './globals.css'
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  FilterWallets,
} from '@/lib/dynamic'

const inter = Inter({ subsets: ['latin'] })

// export const metadata: Metadata = {
//   title: 'Ethernity Token Creator dApp',
//   description:
//     'Create a dApp where users can create an ERC20 token in Ethernity’s L2 blockchain',
// }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <DynamicContextProvider
        settings={{
          environmentId: '24e6c5be-c549-40a6-a11a-a9c374c98b4e',
          walletConnectors: [EthereumWalletConnectors],
          walletsFilter: FilterWallets([
            'metamask',
            'coinbase',
            'walletconnect',
          ]),
        }}
        theme={'dark'}
      >
        <body className={inter.className}>{children}</body>
      </DynamicContextProvider>
    </html>
  )
}
