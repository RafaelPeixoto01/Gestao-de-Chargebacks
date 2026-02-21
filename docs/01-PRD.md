# PRD — Gestão de Chargebacks (Protótipo Navegável)

**Versão:** 1.0
**Data:** 2026-02-21
**Status:** Aprovado
**Fase:** MVP - Protótipo de Alta Fidelidade

---

## 1. Visão Geral do Produto

O produto "Gestão de Chargebacks" visa transformar o processo de gestão de chargebacks de um centro de custo reativo, manual e opaco para uma operação automatizada, inteligente e orientada a ROI. O protótipo navegável servirá para validar a usabilidade e o fluxo de valor com os stakeholders antes do desenvolvimento em larga escala, simulando com total veracidade a aplicação final.

**Repositório do Protótipo:** [https://github.com/RafaelPeixoto01/Gestao-de-Chargebacks](https://github.com/RafaelPeixoto01/Gestao-de-Chargebacks)

---

## 2. Objetivos e Métricas de Sucesso

| Objetivo | Métrica | Meta |
|----------|---------|------|
| Validar UX do Dashboard | Taxa de aprovação em testes de usabilidade | > 90% |
| Simular fluxo de decisão | Tempo para entender a recomendação da IA | < 1 minuto |
| Fidelidade visual | Correspondência com os prints fornecidos | 100% |

---

## 3. Personas

### Persona 1: Analista de Fraudes/Backoffice (Koin)
- **Perfil:** Especialista responsável por avaliar disputas e enviar evidências.
- **Necessidades:** Centralização de notificações de diferentes adquirentes e bandeiras; recomendações claras sobre disputar ou aceitar.
- **Frustrações:** Trabalho repetitivo, falta de contexto nos dados, multas por excesso de disputas (taxas > 0.9%).

### Persona 2: Gestor Financeiro (Merchant/Cliente)
- **Perfil:** Focado em saúde financeira e redução de perdas.
- **Necessidades:** Visibilidade clara sobre o dinheiro recuperado (ROI), taxa de sucesso (win rate) e custo por disputa.
- **Frustrações:** Falta de transparência nos processos de chargeback e perdas financeiras (falsos positivos).

---

## 4. Requisitos Funcionais

### Módulo: Dashboard Central
| ID     | Requisito | Prioridade | Persona |
|--------|-----------|------------|---------|
| RF-001 | Visualização de métricas-chave (Win rate, Valor recuperado, etc.) | Alta | Ambas |
| RF-002 | Lista de chargebacks recentes com status | Alta | Analista |

**RF-001 — Detalhamento:**
- Campos obrigatórios: Win rate (ex: 85%), Valor recuperado (ex: R$ 1.2M), Custo por disputa (ex: R$ 45), Tempo de resolução (ex: 3.5 dias), Redução de chargebacks (ex: 20%).

### Módulo: Detalhes do Chargeback & Decisão
| ID     | Requisito | Prioridade | Persona |
|--------|-----------|------------|---------|
| RF-003 | Recomendação de disputa via Motor de Decisão | Alta | Analista |
| RF-004 | Ação "Disputar" ou "Aceitar" | Alta | Analista |

**RF-003 — Detalhamento:**
- Exibir "Score de vitória" e recomendação embasada em dados para maximizar o ROI.

### Módulo: Geração de Evidências
| ID     | Requisito | Prioridade | Persona |
|--------|-----------|------------|---------|
| RF-005 | Visualizar painel de evidências geradas automaticamente | Média | Analista |

---

## 5. Requisitos Não-Funcionais

| ID      | Requisito | Categoria     |
|---------|-----------|---------------|
| RNF-001 | Alta fidelidade com imagens de referência (`Prints/`) | Design / UX   |
| RNF-002 | Interatividade total entre telas principais | Navegabilidade|
| RNF-003 | Mock de dados realistas (simular backend) | Dados         |

---

## 6. User Stories

- **US-001:** Como analista, quero visualizar uma lista centralizada de chargebacks, para que eu não precise acessar múltiplos portais de adquirentes.
- **US-002:** Como analista, quero ver o score de vitória de um caso, para que eu tome uma decisão rápida e orientada a ROI sobre disputar ou não.
- **US-003:** Como gestor, quero acessar um dashboard com taxas de win rate e valor recuperado, para entender o impacto financeiro das disputas na receita.

---

## 7. Regras de Negócio

| ID     | Regra | Módulo Relacionado |
|--------|-------|--------------------|
| RN-001 | Disputas perdidas geram custo em dobro (processo + taxa). O protótipo deve evidenciar a importância da recomendação. | Detalhes Decisão |
| RN-002 | Limite de chargeback (0.9%) deve ser evitado; a interface pode ter alertas simulando atingimento parcial. | Dashboard |

---

## 8. Fora de Escopo

- Integração real com adquirentes (Cielo, Rede, etc.) e bandeiras (Visa, Mastercard).
- Treinamento real de modelos de ML para o motor de decisão (será mocada).
- Banco de dados real de produção (usaremos dados estáticos/mocks).

---

## 9. Dependências e Premissas

### Dependências
- Imagens da pasta `Prints/` como única fonte de verdade para a UI.

### Premissas
- O protótipo será desenvolvido em tecnologias web frontend (React/Vite).

---

*Documento criado em 2026-02-21.*
