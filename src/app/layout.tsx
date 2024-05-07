import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import {
  DynamicContextProvider,
  EthereumWalletConnectors,
  DynamicWidget,
} from '@/lib/dynamic'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ethernity Token Creator dApp',
  description:
    'Create a dApp where users can create an ERC20 token in Ethernity’s L2 blockchain',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <DynamicContextProvider
        settings={{
          environmentId: '2762a57b-faa4-41ce-9f16-abff9300e2c9',
          walletConnectors: [EthereumWalletConnectors],
        }}
      >
        <body className={inter.className}>{children}</body>
      </DynamicContextProvider>
    </html>
  )
}
