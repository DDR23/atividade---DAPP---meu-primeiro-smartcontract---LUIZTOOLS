import Web3 from "web3";
import ProviderNotification from "../utils/ProviderNotification";
import { Window } from "../types/web3config";

export default function ProviderWallet(): Web3 | void {
  const { ethereum } = window as Window;

  if (!ethereum) {
    ProviderNotification({ title: 'Alerta', message: 'Você precisa instalar a MetaMask' });
    return;
  }

  const web3 = new Web3(ethereum);
  return web3;
}
