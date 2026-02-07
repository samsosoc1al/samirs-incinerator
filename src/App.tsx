import React from 'react';
import { WalletProvider, ConnectionProvider } from '@solana/wallets-react';
import { Cluster, clusterApiUrl } from '@solana/web3.js';
import { Toaster } from 'react-hot-toast';
import burnToken from './burnToken';

const App = () => {
    const connection = new ConnectionProvider({ endpoint: clusterApiUrl('devnet') });

    return (
        <WalletProvider> 
            <ConnectionProvider connection={connection}>
                <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-purple-500 to-green-500">
                    <h1 className="text-white text-3xl font-bold">SYSOL dApp</h1>
                    <button 
                        className="mt-6 bg-white text-purple-500 py-2 px-4 rounded-lg hover:bg-gray-200"
                        onClick={burnToken}
                    >
                        Burn Tokens
                    </button>
                    <Toaster />
                </div>
            </ConnectionProvider>
        </WalletProvider>
    );
};

export default App;
