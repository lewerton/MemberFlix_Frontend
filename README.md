# Memberflix Frontend

Esta é a aplicação frontend do Memberflix, construída com Next.js, React e Material UI.

## Requisitos

*   Node.js (versão LTS recomendada)
*   NPM

## Instalação

1.  Clone o repositório:

```
git clone https://github.com/lewerton/MemberFlix_Frontend.git
```

3.  Acesse a pasta do projeto:

```
cd MemberFlix_Frontend
```

5.  Instale as dependências:

```
npm install
```

7.  Configure o arquivo de ambiente:

**Para Linux/Git Bash:**

```
cp .env.local.example .env.local
```

**Para Windows (Prompt de Comando):**

```
copy .env.local.example .env.local
```

## Scripts

*   **dev**: Inicia o servidor de desenvolvimento com Next.js e Turbopack.

```
npm run dev
```

*   **build**: Gera a build de produção.

```
npm run build
```

*   **start**: Inicia a aplicação em modo produção.

```
npm run start
```

*   **lint**: Executa o ESLint para verificar e corrigir problemas no código.

```
npm run lint
```

*   **test**: Executa os testes com Jest.

```
npm run test
```

## Dependências Principais

*   Next.js: Framework React para renderização do lado do servidor e construção de aplicações modernas.
*   React: Biblioteca JavaScript para construção de interfaces de usuário.
*   Material UI: Biblioteca de componentes React para criar interfaces modernas e responsivas.
*   Axios: Cliente HTTP para fazer requisições à API.
*   React Material UI Carousel: Componente para exibição de conteúdos em carousel.
*   HLS.js: Biblioteca para reprodução de streams HLS.
*   React Player: Componente para reprodução de mídia.

## Dependências de Desenvolvimento

*   Jest: Framework de testes.
*   React Testing Library: Biblioteca para testar componentes React.
*   ESLint: Ferramenta de linting para identificar e corrigir problemas no código.
*   TailwindCSS: Utilitário CSS para estilização rápida (se estiver em uso).
*   TypeScript: Superset do JavaScript com tipagem estática.

## Considerações

*   O projeto utiliza Next.js na versão 15.1.7 e React 18.
*   A variável de ambiente `NEXT_PUBLIC_API_URL` pode ser configurada para apontar para a URL da sua API.
*   O ambiente de desenvolvimento foi configurado para usar o Turbopack.