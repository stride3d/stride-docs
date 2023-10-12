# Criar um jogo Linux

> [!Note]
> Antes de seguir essas instruções, certifique-se de ter seguido as instruções em [Linux - Configuração e requisitos](setup-and-requirements.md).

1. No Stride launcher, crie um novo jogo e selecione Linux como uma plataforma de destino.

   ![ Novo Jogo ](media/platform_choice.png)

2. No Game Studio, no menu de plataformas, selecione **Linux**.

   ![ Seletor de formulários ](media/platform_selector.png)

3. Pressione **F5** para construir e executar o projeto.

4. A primeira vez que você executar o projeto, insira informações sobre seu host Linux:

   ![Diálogo recuo](media/default_credential_dialog.png)

   Digite suas informações como abaixo:

   ![Encontrado Diálogo Credencial](media/filled_credential_dialog.png)

5. Clique em **Test settings** para testar as credenciais.

   Se você cometeu um erro, o Game Studio exibe:

   ![Configurações inválidas](media/unreachable_host.png)

   Se as credenciais estiverem corretas, o Game Studio exibe:

   ![ Sucesso ](media/successful_login.png)

   Clique no botão **OK** para continuar.

   Game Studio copia os arquivos sobre o seu host Linux em um subdiretório do local que você forneceu. O nome do subdiretório é o nome do seu jogo.

   Se algo correr mal, verifique o painel **Output** para obter detalhes.

## Configurações

Suas credenciais são salvas no **Configurações** diálogo:

![Configurações Diálogo](media/remote_settings.png)

A senha é criptografada usando o método Micrsoft *System.Security.Cryptograph.ProtectedData.Protect* para o usuário atual, e salvo no Base64, exibido nas Configurações. Você não pode alterar a senha da caixa de diálogo Configurações.

Existem duas configurações adicionais que controlam a execução de um jogo:

* Use CoreCLR: execução de forças usando . Núcleo de NET

* X Display: força a execução em um display X específico do seu host Linux

## Compile fora Game Studio

Como qualquer projeto Stride, você também pode compilar o projeto diretamente do Visual Studio ou da linha de comando. Em ambos os casos, você precisa selecionar uma configuração válida:

* Depuração
* Lançamento
* CoreCLR_Debug
* CoreCLR_Releas

Debug and Release target Mono. Os outros alvo .NET Core.

### Estúdio Visual

Uma vez que seu projeto é carregado no Visual Studio, selecione o projeto Linux. No menu suspenso **Solution Configurations**, você seleciona uma configuração Linux válida:

![ Seleção de configuração](media/vs_configuration_selection.png)

### MSBuild

Para compilar para Linux, a partir de uma linha de comando, use:

```
msbuild /p:Platform=Linux /p:Configuration=CONFIG O teu jogo
```

Onde **CONFIG** é uma configuração Linux válida.

## Limitações

* Nenhuma instalação de depuração ainda

* Mudar a plataforma gráfica de renderização pode fazer com que o jogo pendure na inicialização. Como solução alternativa, no host do Linux, no diretório onde o jogo é implantado, exclua os seguintes diretórios:

   * `cache`
   * `local local`
   * `roaming`

## Ver também

* [Linux — Configuração e requisitos](setup-and-requirements.md)