# Site de advocacia

Site estático, sem framework ou dependências de instalação. Cada arquivo HTML contém somente o conteúdo daquela página. O CSS e o JavaScript compartilhados ficam em `assets/`. A navegação agrupa as áreas para clientes em “Para você”, cálculos em “Para advogados” e notícias em “Conteúdos”.

## Estrutura

- `index.html`: página inicial
- `sobre.html`, `advocacia.html`, `calculos-judiciais.html`, `blog.html`, `manuais.html`, `contato.html`: páginas principais
- `areas/`: uma página para cada área de atuação
- `artigos/`: uma página para cada artigo do blog
- `assets/css/site.css`: estilos compartilhados
- `assets/js/site.js`: menu responsivo e interações compartilhadas
- `assets/images/`: logo, foto e ilustrações do site

O cabeçalho usa `assets/images/icone_site_quality_red.jpg` como logo. A foto da advogada aparece em `index.html`. Os dados de contato são repetidos no rodapé de cada página.

Em `contato.html`, a seção de contatos e o mapa incorporado usam o endereço do escritório em São Raimundo Nonato, PI.

Abra `index.html` para navegar localmente. Esse é o ponto de entrada do site.
