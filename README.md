# <img width="48" height="48" src="https://img.icons8.com/color/48/rick-sanchez.png" alt="rick-sanchez"/> Rick & Morty Characters Hub

### Accessar o Projeto em produção: https://xsarakemily.github.io/rick-and-morty-characters-hub/

## 📝 Proposta  

Este projeto é uma página de pesquisa de personagens da série de animação Rick and Morty

## 🔹 Features Principais  
- **Listagem de todos os personagens**.
- **Pesquisa de personagens** por nome.  
- **Pesquisa de personagens** por status.  
- **Visualização do total de personagens** de acordo com os filtros.  
- **Visualização de detalhes** de cada personagem.
- **Imagem, nome, status total de episodios, localização, gênero, origem e espécie** de cada personagem.

## 🛠️ Tecnologias utilizadas

- Angular
- Typescript
- TailwindCSS
- DaisyUI

# Tecnicas utilizadas no desenvolvimento

### Arquitetura Modular (Feature-Based Architecture)
Os arquivos foram organizados por funcionalidade, em vez de apenas separá-los por tipo (componentes, serviços, modelos). Isso é ótimo para escalabilidade e manutenção.

Exemplos:
- characters-list → Componentes relacionados à listagem de personagens.
- character-details-modal → Responsável pelos detalhes dos personagens.
- characters → Contém modelos, serviços e enums específicos de personagens.

### Separação de Preocupações (Separation of Concerns)
As responsabilidades foram divididas em arquivos distintos, como:

- Modelos (character.model.ts) → Define a estrutura dos dados.
- Serviços (characters.service.ts) → Gerencia chamadas à API e lógica de negócios.
- Enums (character-status.enum.ts) → Define estados pré-definidos para status dos personagens.
- Helpers (status.helpers.ts) → Possivelmente contém funções auxiliares.

# 🚀 Setup do Projeto 

Clonar o Projeto
```sh
git clone https://github.com/xSaraKemily/rick-and-morty-characters-hub.git
```

Instalar dependencias
---

```sh
npm install
```

## Accessar o Projeto: http://127.0.0.1:4200
