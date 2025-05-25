# Projeto Front-End - Energia Limpa e Acessível

Este é um projeto front-end focado em apresentar informações sobre Energia Limpa e Acessível, o Objetivo de Desenvolvimento Sustentável 7 (ODS 7), e fornecer dicas para o consumo consciente de energia. O projeto inclui páginas de login, cadastro e uma página principal com conteúdo informativo.


## 🌟 Visão Geral

O projeto tem como objetivo conscientizar os usuários sobre a importância da energia limpa e acessível, alinhado com os objetivos da ODS 7. Ele oferece uma interface simples para navegação entre as seções de autenticação e o conteúdo principal.

As principais seções incluem:
* **Página de Login (`index.html`)**: Permite ao usuário acessar a plataforma.
* **Página de Cadastro (`cadastro.html`)**: Permite que novos usuários criem uma conta.
* **Página Principal (`pagPrincipal.html`)**: Apresenta informações detalhadas sobre a ODS 7, seus objetivos específicos e dicas práticas para economia de energia.


## 🚀 Tecnologias Utilizadas

* HTML5
* CSS3
* Google Fonts (Roboto, Ubuntu)
* Material Symbols Outlined (ícones)

## 📂 Estrutura do Projeto

O projeto é composto pelos seguintes arquivos principais:

* `index.html`: Página de login.
* `cadastro.html`: Página de cadastro de usuário.
* `pagPrincipal.html`: Página principal com informações sobre energia limpa e dicas.
* `style.css`: Folha de estilos para todas as páginas HTML.
* `imgs/`: Pasta contendo as imagens utilizadas no projeto.

## ▶️ Como Usar/Executar

Para visualizar o projeto, siga os passos abaixo:

1.  Clone este repositório:
    ```bash
    git clone <URL_DO_REPOSITORIO>
    ```
2.  Navegue até o diretório do projeto:
    ```bash
    cd nome-do-diretorio-do-projeto
    ```
3.  Abra o arquivo `index.html` em seu navegador de preferência.

A partir da página de login (`index.html`), você pode navegar para a página de cadastro (`cadastro.html`) ou, após um "login" simulado (já que o formulário usa `method="get"` e redireciona diretamente), para a `pagPrincipal.html`.

Acesse o site via [Github Pages](https://paulomitsi.github.io/Projeto-front-end/)! 

## ✨ Funcionalidades

* **Autenticação de Usuário (Simulada):**
    * Página de Login (`index.html`) com campos para e-mail e senha.
    * Página de Cadastro (`cadastro.html`) com campos para nome completo, e-mail, senha, telefone e cidade.
    * *Observação: Os formulários utilizam `method="get"` e redirecionam para outras páginas HTML, não havendo processamento de backend.*
* **Conteúdo Informativo (`pagPrincipal.html`):**
    * Cabeçalho com o título "Energia Limpa e Acessível".
    * Seção dedicada à ODS 7, explicando alguns de seus objetivos.
    * Imagens ilustrativas relacionadas à energia alternativa.
    * Dicas de economia de energia divididas em:
        * Iluminação Inteligente
        * Banho Consciente
        * Descarte inteligente
* **Design Responsivo (Básico):**
    * O layout utiliza flexbox e um design que se adapta, em certa medida, a diferentes tamanhos de tela.

## 🎨 Estilo e Aparência

* O projeto utiliza as fontes 'Roboto' e 'Ubuntu' importadas do Google Fonts.
* A paleta de cores principal gira em torno de tons de azul (#e3f2fd, #0d47a1, #64b5f6, #1565c0, #1976d2, #bbdefb).
* As páginas de formulário (`index.html`, `cadastro.html`) possuem um container centralizado.
* A página principal (`pagPrincipal.html`) utiliza seções com imagens e texto para apresentar o conteúdo, com um layout que alterna a posição da imagem em algumas seções (`class="inverter"`).
* Ícones do Material Symbols Outlined são utilizados para enriquecer visualmente as listas de dicas e objetivos.

## 👨‍💻 Autores

Este projeto foi idealizado e desenvolvido por:

* Paulo Mitsi ([GitHub](https://paulomitsi.github.io/))
* Tiago Souza ([GitHub](https://github.com/tiagomsouzac))
* Lincoln Queiroz ([GitHub](https://github.com/lincolnqueirozt))

## 🤝 Como Contribuir

Contribuições são bem-vindas! Se você tem sugestões para melhorar este projeto, siga os passos abaixo:

1.  Faça um Fork do projeto.
2.  Crie uma Branch para sua Feature (`git checkout -b feature/MinhaFeature`).
3.  Adicione suas mudanças (`git add .`).
4.  Comite suas mudanças (`git commit -m 'Adicionando uma Feature incrível!'`).
5.  Faça o Push da Branch (`git push origin feature/MinhaFeature`).
6.  Abra um Pull Request.
