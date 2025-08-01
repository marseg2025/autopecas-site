# AutoPeças Brasil - Site de Afiliados

Site estático para indicação de autopeças com foco em lâmpadas, fusíveis, lentes e botões de vidro elétrico.

## 🚗 Sobre o Projeto

Este é um site de afiliados especializado em autopeças para carros e caminhões brasileiros. O foco está em peças de alta rotatividade e fácil instalação:

- **Lâmpadas LED automotivas**
- **Fusíveis automotivos**
- **Lentes de farol**
- **Botões de vidro elétrico**

## 🎯 Características

- **Design Responsivo**: Funciona perfeitamente em desktop e mobile
- **SEO Otimizado**: Meta tags e estrutura semântica
- **Performance**: Carregamento rápido e otimizado
- **Guias Práticos**: Tutoriais de instalação passo a passo
- **Links de Afiliados**: Integração com Amazon e Shopee

## 🛠️ Tecnologias Utilizadas

- HTML5 semântico
- CSS3 com variáveis customizadas
- JavaScript vanilla
- Google Fonts (Inter)
- Design mobile-first

## 📁 Estrutura do Projeto

```
autopecas-site/
├── index.html              # Página principal
├── css/
│   └── style.css           # Estilos principais
├── js/
│   └── script.js           # Funcionalidades JavaScript
├── images/                 # Imagens e assets
│   ├── logo.png
│   ├── hero-bg.png
│   ├── lampada-led.png
│   ├── fusiveis-kit.jpg
│   └── ...
├── pages/                  # Páginas secundárias
│   ├── guia-lampadas.html
│   ├── guia-fusiveis.html
│   ├── guia-botoes.html
│   └── privacidade.html
└── README.md
```

## 🚀 Como Usar

### Hospedagem no GitHub Pages

1. Faça fork deste repositório
2. Vá em Settings > Pages
3. Selecione "Deploy from a branch"
4. Escolha "main" branch e "/ (root)"
5. Seu site estará disponível em: `https://seuusuario.github.io/autopecas-site`

### Personalização

1. **Links de Afiliados**: Edite o arquivo `js/script.js` e substitua os links de exemplo pelos seus links reais
2. **Conteúdo**: Modifique os textos em `index.html` conforme necessário
3. **Cores**: Ajuste as variáveis CSS em `css/style.css`
4. **Imagens**: Substitua as imagens na pasta `images/`

## 📈 SEO e Analytics

O site está preparado para:
- Google Analytics (adicione seu código de tracking)
- Google Search Console
- Meta tags otimizadas
- Schema markup para produtos

## 🔗 Links de Afiliados

Para configurar seus links de afiliados:

1. Abra `js/script.js`
2. Localize o objeto `affiliateLinks`
3. Substitua os links de exemplo pelos seus links reais:

```javascript
const affiliateLinks = {
    'lampadas': 'https://amzn.to/seu-link-lampadas',
    'fusiveis': 'https://amzn.to/seu-link-fusiveis',
    'lentes': 'https://amzn.to/seu-link-lentes',
    'botoes': 'https://amzn.to/seu-link-botoes'
};
```

## 📱 Responsividade

O site é totalmente responsivo e otimizado para:
- Desktop (1200px+)
- Tablet (768px - 1199px)
- Mobile (até 767px)

## 🎨 Paleta de Cores

- **Primária**: #1a365d (Azul escuro)
- **Secundária**: #ff6b35 (Laranja)
- **Accent**: #2b77e4 (Azul)
- **Texto**: #2d3748 (Cinza escuro)
- **Fundo**: #f7fafc (Cinza claro)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo LICENSE para mais detalhes.

## 🤝 Contribuições

Contribuições são bem-vindas! Sinta-se à vontade para:
- Reportar bugs
- Sugerir melhorias
- Enviar pull requests

## 📞 Contato

Para dúvidas ou sugestões sobre o projeto, abra uma issue no GitHub.

---

**Desenvolvido para o mercado brasileiro de autopeças** 🇧🇷

