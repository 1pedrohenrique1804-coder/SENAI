Projeto: Loja Tênis Importados

Instruções rápidas

- Coloque as fotos dos tênis em `assets/images` usando os nomes abaixo (substitua as imagens existentes se houver):
  - `tenis1.jpg`
  - `tenis2.jpg`
  - `tenis3.jpg`
  - `tenis4.jpg`
  - `tenis5.jpg`
  - `tenis6.jpg`
  - `tenis7.jpg`
  - `tenis8.jpg`
  - `tenis9.jpg`
  - `tenis10.jpg`
  - `tenis11.jpg`
  - `tenis12.jpg`

- Depois de colocar as imagens, abra `index.html` no navegador (duplo clique) para ver o site.

Observações

- O site é estático (HTML/CSS/JS). Não há backend — pedidos são simulados e o carrinho usa `localStorage`.
 - O layout foi melhorado: busca no header, contador de itens, drawer (painel lateral) do carrinho, lazy-loading das imagens e suporte a até 12 produtos.
- Se quiser que eu gere thumbnails automáticos, otimize as imagens para web (JPEG 80% ou WebP) antes de enviar.
- Diga se deseja alterar cores, fontes, textos, adicionar página de checkout ou integração com WhatsApp/PagSeguro/PIX. Vou implementar conforme desejar.

Como enviar as fotos

 - Arraste as imagens para a pasta `SENAI/projeto_loja_tenis/assets/images` no seu computador. Já existem 12 arquivos detectados no projeto.
- Ou, se preferir, me envie as imagens pelo chat (eu as colocarei na pasta para você).

Testes rápidos

- Abra `index.html` no navegador.
- Use a caixa de busca para procurar por modelo ou palavra-chave.
- Abra o carrinho clicando em `Carrinho` no topo; ele guarda os itens em `localStorage`.
- Para limpar o carrinho nos testes, abra o console e rode:

```powershell
localStorage.removeItem('loja_cart_v1')
```

Próximo passo

- Diga se quer que eu: otimizar imagens automaticamente, integrar WhatsApp/PIX, adicionar página de checkout ou ajustar cores e tipografia.
Próximo passos que implementei agora

- Integração WhatsApp por produto: atualize o número em `index.html` no meta `whatsapp-number` com seu telefone com DDI (ex: `+551199999999`).
- Página de checkout simulada: `checkout.html` — finaliza pedido (simulado) e permite enviar resumo via WhatsApp.
- Script de otimização de imagens: `scripts/optimize_images.py` gera thumbnails em `assets/images/thumbs` e WebP em `assets/images/webp`.

Como usar o script de otimização (Windows PowerShell):

```powershell
python -m pip install -r scripts/requirements.txt
python scripts/optimize_images.py
```

Observações sobre pesquisa de informações reais

- Eu não realizei buscas automáticas na web por modelos reais porque isso exigiria serviços/API externas ou permissões para executar buscas e coletar páginas. Posso fazer isso se você autorizar e fornecer uma API (ex: SerpAPI) ou deixar eu usar buscas manuais e trazer links. Diga se quer que eu tente buscar informações reais para os arquivos detectados.

O que posso fazer agora (e já implementei parte)

- Gereis descrições de marketing automáticas com base nos nomes das imagens (feito).
- Implementei JSON-LD dinâmico para os produtos (ajuda SEO). O script é injetado em tempo de execução por `js/main.js`.
- Adicionei controles de filtro por preço e ordenação por preço/nome, e seção de depoimentos.

Se quiser que eu pesquise modelos reais e insira especificações reais nos produtos, diga se prefere:
- "Buscar automático" — você fornece uma API key (SerpAPI / Bing API) e eu busco e importo resultados automaticamente.
- "Buscar manual" — eu faço buscas e trago um relatório com links e textos para você aprovar (consome várias mensagens/tempo).