# Agenda de Contatos - Frontend

Sistema de gerenciamento de contatos com React, TypeScript e TailwindCSS.

## Tecnologias

- React 19.2.0
- TypeScript 5.6.3
- Vite 5.4.11
- TailwindCSS 3.4.14
- React Router 7.9.3
- TanStack Query 5.90.2
- Axios 1.12.2
- Zustand 5.0.8
- React Hook Form 7.63.0
- Zod 4.1.11

## Instalação

```bash
npm install
```

## Configuração

1. Copie o arquivo `.env.example` para `.env`:
```bash
cp .env.example .env
```

2. Configure as variáveis de ambiente:
```
VITE_API_URL=http://localhost:3000
VITE_API_VERSION=v1
VITE_API_TIMEOUT=30000
```

## Desenvolvimento

```bash
npm run dev
```

Acesse: http://localhost:5173

## Build

```bash
npm run build
```

## Preview

```bash
npm run preview
```

## Estrutura do Projeto

```
src/
├── app/                    # Configuração da aplicação
│   ├── App.tsx            # Componente raiz
│   └── router.tsx         # Configuração de rotas
├── assets/                # Recursos estáticos
│   └── styles/           # Estilos globais
├── core/                  # Componentes e utilitários compartilhados
│   ├── components/       # Componentes genéricos
│   ├── lib/              # Configurações de bibliotecas
│   └── utils/            # Funções utilitárias
├── domain/               # Domínios de negócio
├── pages/                # Páginas da aplicação
│   └── layouts/          # Layouts compartilhados
└── main.tsx              # Entry point
```

## Padrões de Código

- TypeScript strict mode habilitado
- ESLint configurado
- Tailwind CSS para estilização
- Path alias `@/` configurado
- Lazy loading de páginas
- TanStack Query para gerenciamento de estado do servidor

## API

O frontend se comunica com a API REST através de dois clientes:

- `publicClient`: Endpoints públicos (`/api/v1/external`)
- `authenticatedClient`: Endpoints autenticados (`/api/v1/internal`)

## Licença

Private