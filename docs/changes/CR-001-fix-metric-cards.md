# Change Request — CR-001: Ajuste visual dos Metric Cards

**Versão:** 1.0  
**Data:** 2026-02-21  
**Status:** Concluído  
**Autor:** Antigravity  
**Prioridade:** Média

---

## 1. Resumo da Mudança

Refatoração do layout dos cards de métricas no Dashboard para torná-los visualmente regulares, alinhados e consistentes independentemente do tamanho da informação ou da largura disponível na tela.

---

## 2. Classificação

| Campo            | Valor                                                                 |
|------------------|-----------------------------------------------------------------------|
| Tipo             | Bug Fix / Refactoring                                                 |
| Origem           | Feedback do usuário                                                   |
| Urgência         | Imediata                                                              |
| Complexidade     | Baixa                                                                 |

---

## 3. Contexto e Motivação

### Situação Atual (AS-IS)
Os cards com métricas apresentam um visual quebrado e irregular quando o tamanho do conteúdo (como números formatados, títulos extensos) ultrapassa o espaço padrão com display flex.

### Problema ou Necessidade
A quebra de linha com `white-space: nowrap` não é tratada corretamente, ou as restrições do flex layout fazem com que o último card desça sozinho com tamanho irregular e quebre a harmonia da interface.

### Situação Desejada (TO-BE)
Os cards devem utilizar um Grid ou Flexbox robusto que adote quebra estruturada, adaptando dinamicamente o número de colunas. O layout interno dos cards deve permitir redimensionamento gracioso dos valores numéricos.

---

## 4. Detalhamento da Mudança

### 4.1 O que muda

| #  | Item                    | Antes (AS-IS)        | Depois (TO-BE)       |
|----|-------------------------|----------------------|----------------------|
| 1  | Container dos Cards     | `display: flex; flex-wrap: wrap;` podendo gerar cards "soltos" e muito largos | `display: grid; grid-template-columns: repeat(5, 1fr);` com fallbacks amigáveis na responsividade |
| 2  | Tamanho e Text-Wrap     | Textos esticando a largura descontroladamente | Flexibilidade de texto controlada (ex: auto-wrap, line-height ajustado, e wrap para a div da métrica/tendência) |

### 4.2 O que NÃO muda
- O conteúdo fornecido pelos mocks (os valores apresentados continuam idênticos).
- O comportamento e os dados do restante da página Dashboard.

---

## 5. Impacto nos Documentos

| Documento                       | Impactado? | Seções Afetadas              | Ação Necessária       |
|---------------------------------|------------|------------------------------|-----------------------|
| `/CLAUDE.md`                    | Sim        | Contexto Atual / CRs Ativos  | Atualizar CR-001      |

---

## 6. Impacto no Código

### 6.1 Arquivos Afetados

| Ação      | Caminho do Arquivo                   | Descrição da Mudança               |
|-----------|--------------------------------------|-------------------------------------|
| Modificar | `src/pages/Dashboard/Dashboard.css`  | Atualização do CSS Grid e responsividade |

### 6.2 Banco de Dados
Não aplicável.

---

## 7. Tarefas de Implementação

| ID      | Tarefa                              | Depende de | Done When                          |
|---------|-------------------------------------|------------|------------------------------------|
| CR-T-01 | Criar/atualizar documentação (CR)   | —          | Documento salvo                     |
| CR-T-02 | Modificar CSS dos cards             | CR-T-01    | Componentes re-estilizados usando grid |
| CR-T-03 | Finalizar status nos docs           | CR-T-02    | Atualizar status no CLAUDE.md       |

---

## 8. Critérios de Aceite

- [ ] Os cards de métrica possuem metragens simétricas entre si (mesmo se o conteúdo de um for R$ 1.2M e outro for 85%).
- [ ] Quebras de visual inconsistentes ("quebrado" e "irregular") resolvidas.
- [ ] Sem erro de compilação ou build da UI.

---

## 9. Riscos e Efeitos Colaterais
- (Nenhum risco significativo. Ajuste de interface isolado).

---

## 10. Plano de Rollback
Reversão do código pelo git do commit que afeta `Dashboard.css`.

---

## Changelog

| Data       | Autor       | Descrição                    |
|------------|-------------|------------------------------|
| 2026-02-21 | Antigravity | CR criado                    |
