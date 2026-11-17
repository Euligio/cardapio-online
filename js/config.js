// =====================================================================
//  CONFIGURAÇÃO DO FIREBASE
//  1. Crie um projeto em https://console.firebase.google.com
//  2. Adicione um "App Web" e copie o objeto firebaseConfig para baixo
//  3. Ative Authentication (E-mail/senha) e Firestore Database
//
//  Enquanto apiKey estiver vazia, o sistema roda em MODO DEMO:
//  os dados ficam salvos só neste navegador (localStorage), ótimo para testar.
// =====================================================================
export const firebaseConfig = {
  apiKey: "AIzaSyCYO_4qwk83Fx5H35XeZINJPoRsBiW52a4",
  authDomain: "cardapio-online-5ab96.firebaseapp.com",
  projectId: "cardapio-online-5ab96",
  storageBucket: "cardapio-online-5ab96.firebasestorage.app",
  messagingSenderId: "839297878958",
  appId: "1:839297878958:web:700458ac784fa434f0d63f"
};

// E-mail do SUPERADMIN (dono do sistema). Crie esse usuário em Firebase › Authentication › Usuários.
// Deve ser o mesmo e-mail que está no topo do arquivo firestore.rules (função superadmin).
// Os demais usuários são cadastrados por ele em Configurações › Equipe (coleção "equipe").
export const SUPERADMIN_EMAIL = "umpierres123@gmail.com";

export const DEMO =!firebaseConfig.apiKey;

// Versão do SDK do Firebase carregada via CDN (não precisa de npm)
export const FIREBASE_SDK = "https://www.gstatic.com/firebasejs/10.12.2";
