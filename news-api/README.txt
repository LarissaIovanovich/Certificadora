Guia de Instalação da API Spring Boot com Gradle
Este guia fornecerá instruções passo a passo para a instalação de uma API Spring Boot, utilizando o sistema de gerenciamento de dependências Gradle. As configurações específicas da aplicação estão incluídas no arquivo application.properties. Certifique-se de seguir atentamente as etapas descritas abaixo.

Pré-requisitos
Antes de começar, certifique-se de ter os seguintes itens instalados em seu ambiente de desenvolvimento:

Java: Versão 17 ou superior.
Gradle: Certifique-se de ter o Gradle instalado em sua máquina.

Passo 1: Configurações do Banco de Dados com XAMPP
Se você estiver utilizando o XAMPP como seu servidor de banco de dados, siga as instruções abaixo para criar o banco de dados news_db.

Subpasso 1.1: Inicie o XAMPP
Certifique-se de que o XAMPP esteja instalado em sua máquina e inicie o servidor MySQL.

Subpasso 1.2: Acesse o phpMyAdmin
Abra seu navegador e acesse o phpMyAdmin, geralmente disponível em http://localhost/phpmyadmin/.

Subpasso 1.3: Crie o Banco de Dados
No painel do phpMyAdmin, clique na aba "Banco de dados".
No campo "Nome do banco de dados", insira o nome desejado, por exemplo, news_db.
Clique no botão "Criar".
O banco de dados news_db agora está criado e pronto para ser utilizado pela sua aplicação Spring Boot.

Passo 2: Instalação de Dependências do Gradle
Antes de prosseguir com a configuração da estrutura do projeto, certifique-se de instalar as dependências do Gradle. Abra um terminal na raiz do seu projeto onde está localizado o arquivo build.gradle e execute o seguinte comando:

Passo 3: Acesso à Aplicação e Execução
Neste ponto, você está pronto para acessar a aplicação e executá-la. Siga os passos abaixo:

Abra a classe principal da sua aplicação Spring Boot. Normalmente, esta classe contém um método main e está anotada com @SpringBootApplication. Algo como:
Execute o método main clicando com o botão direito na classe e escolhendo a opção "Run" (ou "Executar", dependendo do ambiente de desenvolvimento que você está utilizando).
Isso iniciará a aplicação Spring Boot. Verifique o terminal para mensagens de log indicando que a aplicação foi iniciada com sucesso.
