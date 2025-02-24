# Memberflix Frontend
Esta é a aplicação frontend do Memberflix, construída com Next.js, React e Material UI.

## Requisitos
- Node.js (versão LTS recomendada)
- NPM  

## Instalação
1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITÓRIO>
   ```

2. Acesse a pasta do projeto:
   ```bash
   cd memberflix_frontend
   ```

3. Instale as dependências:
   ```bash
   npm install
   ```

## Scripts

- **dev**: Inicia o servidor de desenvolvimento com Next.js e Turbopack.
  ```bash
  npm run dev
  ```

- **build**: Gera a build de produção.
  ```bash
  npm run build
  ```

- **start**: Inicia a aplicação em modo produção.
  ```bash
  npm run start
  ```

- **lint**: Executa o ESLint para verificar e corrigir problemas no código.
  ```bash
  npm run lint
  ```

- **test**: Executa os testes com Jest.
  ```bash
  npm run test
  ```
  

## Dependências Principais
- **Next.js**: Framework React para renderização do lado do servidor e construção de aplicações modernas.
- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Material UI**: Biblioteca de componentes React para criar interfaces modernas e responsivas.
- **Axios**: Cliente HTTP para fazer requisições à API.
- **React Material UI Carousel**: Componente para exibição de conteúdos em carousel.
- **HLS.js**: Biblioteca para reprodução de streams HLS.
- **React Player**: Componente para reprodução de mídia.

## Dependências de Desenvolvimento
- **Jest**: Framework de testes.
- **React Testing Library**: Biblioteca para testar componentes React.
- **ESLint**: Ferramenta de linting para identificar e corrigir problemas no código.
- **TailwindCSS**: Utilitário CSS para estilização rápida (se estiver em uso).
- **TypeScript**: Superset do JavaScript com tipagem estática.  

## Considerações
- O projeto utiliza Next.js na versão 15.1.7 e React 18.
- A variável de ambiente `NEXT_PUBLIC_API_URL` pode ser configurada para apontar para a URL da sua API.
- Foi configurado para usar o Turbopack no ambiente de desenvolvimento.