# Plano de Implementação — Gestão de Chargebacks (Protótipo Navegável)

**Versão:** 1.0
**Data:** 2026-02-21
**PRD Ref:** 01-PRD v1.0
**Arquitetura Ref:** 02-ARCHITECTURE v1.0
**Spec Ref:** 03-SPEC v1.0

---

## Visão Geral

| Grupo    | Descrição               | Tarefas        | Status    |
|----------|-------------------------|----------------|-----------|
| 1        | Setup e Infraestrutura  | T-001 a T-003  | Pendente  |
| 2        | Estruturação Visual & UI| T-004 a T-007  | Pendente  |
| 3        | Telas / Componentes Core| T-008 a T-010  | Pendente  |
| 4        | Mocks e Fluxo Completo  | T-011 a T-013  | Pendente  |

---

## Grupo 1: Setup e Infraestrutura

| ID    | Tarefa | Arquivos | Ref | Depende de | Done When |
|-------|--------|----------|-----|------------|-----------|
| T-001 | Inicializar projeto Vite+React | `package.json`, `tsconfig.json` | — | — | Projeto roda com `npm run dev` sem erros locamente |
| T-002 | Instalar dependências de roteamento | `package.json` (react-router-dom) | — | T-001 | Pacote instalado |
| T-003 | Configurar estrutura base de pastas | Estrutura conforme ARCHITECTURE.md | — | T-001 | Pastas criadas corretamente (`src/pages`, `src/components`, etc) |

---

## Grupo 2: Estruturação Visual & UI

| ID    | Tarefa | Arquivos | Ref | Depende de | Done When |
|-------|--------|----------|-----|------------|-----------|
| T-004 | Analisar minuciosamente os Prints | Pasta `Prints/` | RNF-001 | — | Identificar cores, tipografia, bordas, sombras e padrões. |
| T-005 | Criar arquivo CSS Global de Design System | `src/styles/global.css` | RNF-001 | T-004 | Variáveis CSS em `:root` contendo cores, fontes e espaçamentos fidedignos aos prints |
| T-006 | Implementar Layout Shell (Sidebar/Header) | `src/components/layout/Shell.tsx` | UI | T-005 | Layout presente em todas as telas com sidebar correta |
| T-007 | Criar componentes UI granulares | `Button`, `Badge`, `Card`, `Icon` | UI | T-005 | Componentes visualmente exatos aos prints, com propriedades TS corretas |

---

## Grupo 3: Telas / Componentes Core

| ID    | Tarefa | Arquivos | Ref | Depende de | Done When |
|-------|--------|----------|-----|------------|-----------|
| T-008 | Implementar tela de Dashboard | `src/pages/Dashboard/index.tsx` | RF-001 | T-006, T-007 | Tela visualiza cards de métricas e tabela de disputas como no Print |
| T-009 | Implementar tela de Detalhes da Disputa | `src/pages/ChargebackDetail/index.tsx` | RF-003 | T-006, T-007 | Exibe detalhes e card do Motor de Decisão ("Score de vitória") do Print |
| T-010 | Implementar componentes de modais/ações extras | `EvidenceModal`, etc | RF-005 | T-006 | Funcionalidades de pop-up e modais simuladas visualmente |

---

## Grupo 4: Mocks e Fluxo Completo

| ID    | Tarefa | Arquivos | Ref | Depende de | Done When |
|-------|--------|----------|-----|------------|-----------|
| T-011 | Implementar Mocks em JSON/TS | `src/services/mockData.ts` | — | T-003 | Arquivo com lista rica de objetos para popular Dashboard e Detalhes |
| T-012 | Configurar roteamento da aplicação | `src/App.tsx`, rotas | RNF-002| T-008, T-009 | É possível clicar num item na tabela do Dashboard e ir para Detalhes |
| T-013 | Refinamento Visual (Pixel Perfect) e Teste | Todos os CSS e Telas | RNF-001| T-012 | O protótipo online for indistinguível dos Prints fornecidos |

---

## Estratégia de Teste Manual (Validação)

1. **Testando a Navegabilidade:**
   - [ ] Iniciar o protótipo com `npm run dev`
   - [ ] Acessar `/` (Dashboard)
   - [ ] Clicar num chargeback na tabela para ir para a tela de detalhes
   - [ ] Verificar se as animações/transições de CSS (hovers, etc) estão reagindo corretamente

2. **Testando Qualidade Visual:**
   - [ ] Abrir imagens da pasta `Prints/` lado a lado no monitor
   - [ ] Validar fontes, espaçamentos, cores e formato dos cards para estar 100% igual.
   - [ ] Ajustar discrepâncias pontuais iterativamente.

---

*Documento criado em 2026-02-21.*
