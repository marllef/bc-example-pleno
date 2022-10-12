# Teste de nível - Dev Pleno

**Obrigado por se candidatar para a vaga de Dev Pleno na Kuppi.**

Para podermos proseguir com o processo de avaliação, estamos disponibilizando um teste dividido três exercícios (Exercício prático (Frontend, Backend) e Exercício conceitual). Você terá um dia para desenvolvê-lo. Mas se surgir algum imprevisto ou problema é só nos avisar.

### **Orientações iniciais**

O teste proposto será bem simples, porém por sermos uma startup, além das habilidades técnicas é muito importante a comunicação e pesquisa por soluções de problemas. Tenha isso em mente ao resolvê-lo.

O teste é composto por três exercicios, é importante **fazer os três**.

O uso de requisitos e os diferenciais listados na vaga será considerado um bônus.

O desenvolvimento deverá ser **feito em ReactJS e NodeJS (com Adonis)**. O projeto deve ser entregue em outros repositórios.

#### **Packages requeridos**

É obrigatório o uso das bibliotecas listadas a seguir e será levados em consideração na análise do teste.

- axios
- styled-components

Esses outros packages a seguir também são obrigatórios, porém já estão implementados a arquitetura de seu uso, fique vontade para incrementar o que achar necessário e pertinente.

- immer
- react-router-dom
- history
- redux
- react-redux
- redux-persist
- redux-saga

Boa sorte!

### **Exercício 1 - Teste prático**

## Backend

Para prosseguir faça um Fork do projeto: https://github.com/BomCupom/bc-example-api-pleno, para utilizá-lo como base no teste.

- Implemente um controller que deverá atender a duas rotas de método GET, uma que listará todos os produtos e outra que listará os dados específicos de um produto pelo seu ID;

- As duas rotas devem ser protegidas pelo token disponível no arquivo .env na chave: AUTH_TOKEN e que será enviado pelo frontend no header: auth-token;

- Importante ter tratamento de exception nesse controller;

- A lista de produtos que as rotas devem usar para devolver os dados está no arquivo: assets/products.json do repositório: bc-example-api-pleno;

## Frontend

Para prosseguir faça um Fork do projeto: https://github.com/BomCupom/bc-example-pleno, para utilizá-lo como base no teste.

- Implemente uma aplicação que exiba em uma rota, uma listagem de produtos com seus nomes, preços e foto;

- Crie também em cada item da listagem, um componente que direcione para outra rota, que servirá para exibir os detalhes desse produto com o restante das informações disponíveis;

- A estilização do projeto deve ser feito em *Styled Component* e ela juntamente com o layout desenvolvido serão levados em consideração na análise do teste;

- O backend que deverá ser utilizado é o que será desenvolvido no item acima (# Backend);


### **Exercício 2 - Teste conceitual**

Responda as perguntas abaixo com suas próprias palavras, mas também fique livre em aplicar algum desses conceitos na primeira parte do teste.

- Se uma rota é repetida diversas vezes em sua aplicação, como seria possível melhorar a arquitetura para facilitar em manutenções posteriores?

  Para facilitar a manutenção e evitar repetições de código que as vezes são desnecessárias pode-se utilizar conceitos de Clean Code. O nome de uma variável, função, classe ou rota bem planejado pode auxiliar no processo de refatoração além de deixar mais clara e objetiva a leitura do código. No caso de rotas estáticas que se repetem muitas vezes pela aplicação pode-se criar um "constant string" para modularizar as chaves que identificam a rota, identificando-a com uma constante. Dessa forma, caso tenha a necessidade de fazer alterações será facil de encontrar, já que com o Clean Code o nome foi bem planejado para que seja pesquisável. Além disso, existem abordagens de roteamento que diminuem as chances de se ter rotas complexas com muitas repetições, como é o caso da abordagem "File System Routing", onde se utiliza a própria estrutura de arquivos e pastas do projeto para criação das rotas.

- É possível melhorar a performance da solução? Como as melhorias impactam a leitura e manutenção do código?

  Sim, sempre é possivel melhorar! O projeto pode ser melhorado de diversas formas, principalmente se utilizando os conceitos de Clean Code para refatorar sempre que possível algum trecho do código deixando-o modular. Além disso, para melhorar o desempenho e disponibilidade da aplicação pode-se utilizar abordagens de Cacheamento, Server-Side Rendering e Static Site Generation. Dessa forma, a aplicação teria um bom ganho de perfomance, além de ter o código sempre legível, funcionando e melhorado após as refatorações.

- De que forma o sistema pode escalar com a arquitetura planejada?

  Deixando o sistema modular, é possivel utilizar uma arquitetura baseada em MicroServiços, possibilitando a escalabilidade do sistema. Além disso, pode-se utilizar serviços como a Kubernetes para automatizar a implantação de novas instancias caso a demanda seja muito alta, garantindo sua disponibilidade.
