# Notas de versão do Xenko 3.0

2 de agosto de 2018

## Destaques

### Xenko é agora um projeto de código aberto baseado na comunidade MIT!

Leste bem. **Xenko 3.0** está fora agora, lançado sob a permissiva [MIT License](https://opensource.org/licenses/MIT).

A partir de agora, você pode usar e modificar Xenko completamente **free** — se você é um profissional, um estudante, ou apenas procurando um novo hobby. Isso inclui o tempo de execução e editor.

![Xenko GitHub](media/ReleaseNotes-3.0/xenko-oss.png)

O Silicon Studio não suporta mais Xenko, mas os membros da equipe Xenko continuarão trabalhando nele como parte da comunidade.

Encorajamos as pessoas a nos ajudar e a contribuir para o projeto. Se estiver interessado, junte-se a nós em [GitHub](https://github.com/xenko3d/xenko/).

Estamos realmente animados para ver o que as pessoas vão inventar!

Obrigado por apoiar Xenko!

### Novo sistema de projeto

Tanto o projeto Xenko como os usuários agora são construídos em cima do novo sistema de projeto.

Significa que o seu jogo csproj é agora mais simples como sempre, com apenas um `PackageReference` para Xenko.

Isso torna o pacote restaurar, atualizar e seleção muito mais conveniente. Abrir um projeto com uma versão não-instalada do Xenko deve funcionar fora da caixa também, desde que o lançador Xenko esteja instalado.

Mais para baixo da estrada, o plano é dividir Xenko mais em pacotes separados, como `Xenko.Graphics`, `Xenko.Physics` e `Xenko.Editor` (e possivelmente host them diretamente em nuget.org).

### Vídeo

Agora é possível adicionar vídeo aos seus jogos.

Note que este recurso não é completamente testado e suportado em todas as plataformas, mas decidimos incluí-lo de qualquer forma e sintonizá-lo mais tarde para não atrasar o lançamento do MIT mais.

### Renderização de pele e cabelo

A renderização de pele e cabelo agora é possível com Xenko.

A renderização da pele é baseada na dispersão subsuperfície, e a renderização do cabelo é baseada nos modelos Kajiya-Kay e Scheuermann.

O mesmo que o vídeo, este recurso ainda pode precisar de algumas melhorias e ajuste, mas decidimos não atrasar o lançamento do MIT mais.

## Alterações de ruptura

### Mudanças no namespace Xenko

Muita mudança de namespace para depar o namespace de `SiliconStudio`:

* `SiliconStudio.Xenko` renomeado `Xenko`
* `SiliconStudio.Core` e `SiliconStudio.*` renomeado `Xenko.Core`

Os projetos devem ser atualizados automaticamente, mas recomendamos que você faça um backup do seu projeto antes, e verificar duas vezes tudo é bom após a atualização.

### Novo sistema de projeto

O projeto de jogo será recriado com o novo sistema de projeto.

Isso deve acontecer automaticamente, mas você pode precisar de alguns ajustes depois (ou seja, readjust Build Action em determinados itens csproj).

## Mudança

### Android

* Corrigir chamadas para OnPause e OnResume quando o aplicativo é colocado em segundo plano / primeiro plano.
* Fix regex usado para verificar a versão do android ndk.

### Android. Testes

* Corrigir acidente ao iniciar a atividade de teste do lançador de teste.

### Animação

* Adicione a possibilidade de importar curvas de animação de atributos personalizados presentes em FBXs.

### Processo de montagem

* Gerar código de serialização diretamente com Cecil
* Olhe em interfaces contidas em classes de base ao gerar o código de registro ListUpdateRevolver.
* Retorno iOS (calli genéricos e unbox)
* Suporte Pintado Tipo
* Use ILRepack de NuGet

### AssetCompiler

* Instale o redirecionamento do alvo na primeira compilação e melhore a detecção do caminho
* Mostrar URL de ativos em caso de exceções no comando

### Activos

* Adicione a possibilidade de não mesclar malhas de um modelo sem esqueleto para beneficiar de cobertura.
* Adicione a possibilidade de usar um modelo sem animação como referência de um clipe de animação diff.
* Rastrear automaticamente as alterações de código fonte (DefaultItems)
* Factorize SoundAssetCompiler para uso futuro (vídeo)
* Ativos fixos. Testes nuget pacotes/app.config
* Introduza a interface \`IAssetWithSource\` para unificar \`AssetWithSource\` com outro tipo de ativos com uma fonte (por exemplo, \`ModelAsset\`).
* Mover classes de ativos de som em namespace \`Media\`
* Atualizador de pacote para BackgroundComponent.Is2D
* Som: Use ShellHelper para chamar ffmpeg

### Ativos. Compilador

* Construtor remoto reorganizado em ativos. CompilerApp em vez de BuildEngine.Common

### Ativos. Editor

* Remover resx excluído de csproj

### Ativos. Modelo

* Adicionado mecanismo para personalizar modelos durante a compilação de ativos.

### Áudio

* Várias melhorias (cortesia de Pierre e Jonathan)

### Áudio. Testes

* Remova temporariamente 4 sons de canais (falhas com ffmpeg)
* Teste não compilando desde SoundPlayState => Renomear o PlayState

### Áudio / Vídeo

* Detectar erros FFMpeg

### Construa

* Adicione o TargetFramework explícito aos arquivos do projeto
* Adicionado DataMemberIgnore em LocalReflections. DebugModes para evitar erros de serialização
* Redirecionamento de adereços/alvo adicionado para NuGet consumo
* Sistema adicionado. ValueTuple (correção temporária até mudarmos para PackageReference para o próprio Xenko)
* Bumped Windows 10 SDK para 10.0.16299.0
* Alteração explícita TargetFrameworkVersões para TargetFramework
* Converter para PackageReference
* Defina o TargetFramework para conjuntos de ferramentas
* Excluir todos os pacotes. config e inclui
* Desativar a construção nativa durante a construção do tempo de design
* Provavelmente incluem a Microsoft. NET. Adereços/alvo Sdk para mais alguns projetos que não foram compilar corretamente
* Provavelmente incluem a Microsoft. NET. Adereços/alvo Sdk para ser capaz de substituir alguns valores
* Preencha a lista de arquivos para limpar somente ao executar o alvo limpo
* Fix compilação de projetos relacionados ao shader
* Fix CoreCLR construir
* Fixar metas de linguagem para projetos WPF
* Correção de saída
* Corrigir a compilação de pacotes
* Fix skybox não funciona com cubemaps comprimidos.
* Corrigir algumas construções de projeto
* Construção incremental fixa (ainda não perfeita, esperando por mais informações em https://github.com/dotnet/project-system/issues/3157)
* Teste de unidade fixa e compilações de pacotes
* Se SiliconStudioCompilerTargetsEnable estiver definido como false, substitua LanguageTargets a um vazio
* Inclua *.cs arquivos que não estão no diretório do projeto
* Listar pastas de recursos explicitamente em .xkpkg
* Faça Xenko Native .cpp/.h arquivo que se globbing mais rápido ignorando pastas obj/bin
* Mais limpeza
* Fontes movidas de fontes/subdiretório comum a fontes para que tudo esteja ao mesmo nível
* Override SiliconStudioXenkoOutputPath mesmo se definido
* Remover *.CSharp.targets importações
* Remover comentários padrão
* Remover muitas propriedades desnecessárias
* Remover Microsoft.Common.props importações
* Remover a maioria dos atributos de AssemblyInfo.cs
* Remover arquivos obsoletos
* Remover referências a conjuntos de framework padrão
* Remover alguns redundantes Atualizações de itens compatíveis
* Remover ferramentas Versões
* Remover arquivo *.cs desnecessário inclui
* Remover diretivas xml desnecessários
* Remover CoreFX
* Removido compressão LZMA (melhor para ser diretamente suportado no nível NuGet?)
* Remover SiliconStudio.Apresentação.SampleApp (não usado)
* Removedo não usado SharpDiff
* Removido não usado SharpDX.Mathematics de deps (usando NuGet versão já)
* Remover SQLite não utilizada
* Reverter amostras para não usar novo sistema csproj por agora
* Reverter testes de unidade para o sistema antigo por agora
* Executar AssemblyProcessor antes da montagem é copiado em vez de durante CoreCompile (o que acontece durante o carregamento do Visual Studio)
* Configuração adequada AssemblyName para conjuntos de instalação de pacotes
* Alvo de configuração para cpp (respeito SiliconStudioCompilerTargetsEnable)
* SiliconStudioXenkoReplaceVersionInfo alvo não estava funcionando corretamente com o novo sistema de compilação
* Simplifique as referências do projeto
* Mudar para o novo sistema csproj para jogos
* Mudar para versão nuget para Mono.Options
* Mudar para versão nuget para Mono.TextTemplating
* Os projetos de testes agora têm um Serviço em csproj com a última atualização VS
* Atualizar arquivos *.cs com propriedades adicionais, em vez de incluir
* Atualizar .gitignore para lançamentoSettings.json
* Instruções de compilação de atualização
* Atualizar recursos embarcados em vez de incluir
* Atualizar cabeçalhos de arquivo de projeto
* LLVM atualizado para 5.0.1 (evitar alguns problemas com o símbolo ausente "terminado" na UWP, que deve resolver para std::terminar)
* Atualizado THIRD PARTY.md para refletir o uso de DocFX em vez de SharpDoc
* Atualizar para o novo formato csproj
* Use o MSBuild 15.5 do MyGet
* Use o Windows SDK v10.0 em vez de v8.1 para d3dcompiler_47.dll
* Várias melhorias / correções para o novo sistema de projeto
* Solução para https://github.com/xamarin/xamarin-android/issues/1235 (Recursos Android não sendo devidamente mesclados em compilação incremental)
* Solução para dependências de soluções com quadros incompatíveis: https://github.com/Microsoft/msbuild/issues/2661#issuecomment-338808156

### Construa o motor

* Testes: corrigir compilação desde SlaveBuilder O caminho foi removido

### Cecil

* Proteja contra exceção de referência nulo quando não há rendimentos no método async
* Atualização para o último Cecil + ILRepack

### Núcleo

* Remova a restrição desnecessária em parâmetros genéricos de métodos de extensão \`DisposeBy\` e \`RemoveDisposeBy\`.

### Core.Tests

* Desativar ao construir com CoreCLR ou se SiliconStudioSkipUnitTests é definido
* Csproj fixo para que ele corretamente constrói

### Revisão de Crash

* Transformado em um projeto compartilhado

### Deps

* Removed unused lzma.exe
* Remover bibliotecas NuGet não utilizadas (usando PackageReference em vez)
* Atualizar scripts de checkout.
* Versão de atualização do ffmpeg a de 3.3 a 3.4.

### Editor

* Altere o diretório de compilação do editor para projetar o diretório Cache mesmo no modo Dev. Remova a propriedade da pasta de retorno das configurações (misleading).
* atributo de exibição de sinal de lente correta
* FindTemplates de acordo com a sessão atual (ou pacote padrão se nenhuma sessão carregada)
* Corrigir NullReference falha quando o ativo está prejudicando o DisplayAttribute.
* Atualize arquivos de localização.
* Atualize arquivos de localização. Também atualizado alguns comentários.
* Atualizado em CodeAnalysis 2.4.0 e RoslynPad 1.0.4 (de NuGet)

### Motor

* Adicione uma bandeira para ser capaz de forçar o motor a atualizar o cache do avaliador de animação (útil ao atualizar os valores do canal de clip no tempo de execução).
* Adicione getter ao AnimationProcessor para poder acessar o AnimationClipResult.
* Projeção de textura adicionada a pontos de luz (cortesia de Mirsad)
* AnimaçãoBlender: Implementar mistura para tipo Float1.
* Mudar o nível de log de ffmpeg para \`fatal\`. o nível \`error\` pode exibir erros recuperáveis.
* Fixação do valor normal.z a (0, 1) para evitar o resultado de NaN de sqrt().
* Limpeza de código.
* Atrasar a inicialização do shader parsers para primeiro uso em vez de primeiro shader carregado (significativamente reduzir o tempo de carga no caso nenhum shader precisa ser compilado).
* Fix LightShafts com transmitância de sabão
* Corrigir várias falhas e problemas multi-threading acontecendo quando o modelo NodeLinkComponents está segmentando um modelo não em sua hierarquia pai.
* Implementar interface ICollectorHolder no ScriptComponent para ser capaz de descartar automaticamente objetos durante o método script Cancel.
* Limpeza menor
* Mover ModelNodeLinkProcessor antes TransformProcessor para evitar ter o primeiro quadro onde a transformação não é atualizada.
* NotNull e melhorias cosméticas
* Removido algum código/arquivos não utilizados
* Retornar o PlayingAnimations criado ao adicionar um novo AnimationClip para conveniência e consistência com outras funções de jogo.
* Transmissão: Adicionado uma nova opção DoNotStream
* Suporte entidade em movimento dentro da cena
* UpdateEngine: procure o atualizador de membros vindo de classes de base antes de cair de volta no resolvedor personalizado.

### ExecServer

* Remover LoaderOptimization.MultiDomain

### FBX

* Mudar para FBX SDK 2018.1.1

### FBX. Importador

* Otimize o cálculo do Quaternion a partir do quadro de rotação XYZ.

### Jogo

* Adicione a possibilidade de renderizar a tela de respingo como uma visão dupla para jogos VR.

### GameStudio

* Remover expiração

### Geral

* Removido grupo de arquivos não utilizados e corrigiu alguns cabeçalhos de licença

### Gráficos

* Adicione suporte para texturas 2D panorama ao ativo skybox.
* Adicione ViewDimension property on Texture. Ajuste o código de acordo para que o motor se comporte corretamente em Ver texturas.
* Adicionado um elenco em SubsurfaceScatteringBlur.cs.
* Adicionado um cheque para ver se o buffer MaterialIndices é usado antes de substituir "allTargets\[1\]".
* Adicionado um comentário em MaterialHairLightAttenuationFunctionDirectional.xksl.
* Adicionado um comentário.
* Adicionado uma primeira versão da classe MeshHairRenderStageSelector.
* Adicionado uma excepção.
* Adicionados comentários.
* Adicionado NotNull
* Adicionado PCF para espessura SSS. Refactored o código PCF. Renamed "CalculateThickness()" to "FilterThickness()".
* Adicionado alguns moldes para corrigir erros shader.
* Adicionado suporte para mapas de cavidade e oclusão no modelo de corte de cabelo.
* Adicionado suporte para escolher quais normais usar para a atenuação de luz direcional para o cabelo. Moveu uma computação da GPU para a CPU.
* Adicionado suporte para configurar os parâmetros do kernel de dispersão. Refatizou a geração de kernel dispersante.
* Adicionado suporte para falso sombreamento.
* Adicionado suporte para kernels de dispersão por material e perfis de dispersão.
* Adicionado suporte para redimensionar a matriz de material para o processo de postagem SS. Refactored o código.
* Adicionado suporte para até 256 kernels de dispersão no pós-processo SSS armazenando os kernels em um buffer.
* Adicionado a multiplicação ausente pela cor difusa para o espalhamento.
* Adicionado dois parâmetros edit-tunable (não ainda integrado) para a transmissão SSS.
* Assou um cálculo no kernel de dispersão SSS para que não tenha que ser executado no pós-processo.
* Baseado no modelo de sombreamento SSS no lambert difuso um em vez do CelShading um. Removido arquivos redundantes.
* Limpou um código de holofote.
* Limpou a classe "SubsurfaceScatteringBlur".
* Limpe o perfil de transmissão SSS e espalhando o código de geração do kernel.
* Limpou o sombreador pós-processo SSSS.
* Integrou corretamente a resolução de estêncil de profundidade para cabelo e objetos transparentes.
* Valores padrão definidos para propriedades e simplificado o código.
* Fed o termo NdotL adequado em certas funções. Um pequeno refator. Sombras aplicadas às reflexões especulares.
* Finalizou a iluminação indireta do cabelo especular por agora.
* Fix 2D textura pára-quedas compilação crash com gráficos nível API < 10
* Fix D3D12 compilação
* Corrigido um erro fazendo com que o mapa da sombra seja calculado incorretamente para certas direções de luz.
* Corrigido um erro causando a variável de fluxos de espessura de pixel de mapa de sombra não ser definido.
* Corrigido um bug no pós-processo SSS que fez com que o kernel de dispersão se tornasse distorcido em viewports não-quadrados.
* Corrigido um erro dentro de ShadowMapReceiverSpot.xksl.
* Corrigido um bug que causou NaN com o modo de sombreamento de aproximação Scheuermann. Limpe e comentei os shaders do cabelo.
* Corrigido um erro de cópia.
* Corrigido um erro Mizuchi na iluminação indireta do cabelo.
* Renderização de face traseira fixa para geometria de cabelo opaco. Código de depuração removido. Refactored o código específico do cabelo em MeshPipelineProcessor.
* Corrigido novos erros de compilação de shader menor.
* Corrigido alguns artefatos de cálculo de espessura SSS fornecendo o espaço correto, mundo normal em vez de espaço de objeto normal.
* Corrigido algumas coisas no código de renderização do cabelo e limpou-o.
* Cálculo de espessura SSS fixo para holofotes.
* Corrigido o erro que faz com que a espessura desbote para 1.0 e não 0,0 na borda de mapas de sombra.
* Corrigido a integração do mapa da cavidade para o corte do cabelo e removeu o parâmetro da cavidade obsoleto.
* Corrigido a força incorreta para renderbuffer para todos os anexos FBO. Refactored o código.
* Corrigido o problema com os buffers constantes + mixins que são incluídos várias vezes por shader de cabelo. Refactored o código de renderização do cabelo.
* Mais limpou os shaders SS.
* Livrou-se da dependência circular entre SubsurfaceScatteringBlur e SubsurfaceScatteringRenderFeature.
* Hid a propriedade "Ativado" do MSAAResolver de uma forma mais segura.
* Implementado "FilterThickness()" para luzes sem sombras PCF.
* Implementado um modo de depuração para o corte de cabelo.
* Implementou uma lista para escolher diferentes tipos de perfis de dispersão para SSS (WIP).
* Implementado um deslocamento mais preciso para a filtragem de espessura SSS para reduzir consideravelmente os artefatos em torno de bordas de objetos.
* Implementou um novo ponto de extensão em "MaterialSurfaceLightingAndShading" e "IMaterialSurfaceShading".
* Implementado um PipelineProcessor para cabelo e desativado o código específico do cabelo em MeshPipelineProcessor.
* Mistura em cascata implementada para o cálculo de espessura usando mapas de sombra direcional.
* Desduplicação implementada para o array de parâmetros de dispersão no SubsurfaceScatteringRenderFeature para economizar espaço no array. Refactored o código.
* Implementado força-disable de MSAA no iOS, por isso compila.
* Implementado MSAA para Desktop OpenGL. Corrigido a serialização MSAAResolver.
* Implementado MSAA para OpenGL ES. Simplificou e otimizou algum código OpenGL.
* Implementado novos modelos de sombreamento difuso e especular para o cabelo com base nas implementações padrão do modelo de sombreamento.
* Implementado geração preliminar de perfil de dispersão no eixo e suporte de perfil de dispersão pré-computado.
* Implementado apoio adequado para falso sombra, sombra e dispersão. Uma refatoração. Código duplicado combinado. Adicionado mais parâmetros. Moveu algumas verificações de intervalo para a CPU.
* Implementado a escrita de força de dispersão para o canal alfa, de modo que o pós-processo pode experimentá-lo.
* Suporte de dispersão implementado para luzes de ponto e melhorou outras coisas de cálculo de espessura.
* Suporte implementado para alterar o modelo de sombreamento de cabelo. Refactored os shaders. Suporte temporariamente desativado para texturas de ruído. Substituiu propriedades "Texture" com "IComputeColor". Instruções e resumos atualizados.
* Suporte implementado para alterar o modo de renderização do pós-processo SSS de dentro do editor.
* Suporte implementado para projeções ortográficas e de perspectiva para SSS. Livrou-se do parâmetro "DepthFalloffStrength".
* Suporte implementado para mapas de força SSS.
* Implementado a classe "SubsurfaceScatteringSettings" e hardcoded the sample count for now. Integrado nas classes dependentes.
* Implementou a primeira versão da iluminação de transmissão SSS como um novo modelo de sombreamento.
* Implementou a nova variável fluxos "meshNormalWS" e integrou-a na sombreamento de cabelo e SSS.
* Implementou o processo Separable Subsurface Scattering post como um novo ImageEffect.
* Implementado o mapa de força SSSS usando ComputeColor para mais liberdade artística e seleção adequada de mapas mip.
* Implementado dois novos parâmetros para controlar as texturas de ruído especulares para o corte de cabelo. Comentado código não utilizado.
* Melhorou o jittering no sombreador pós-processo SSSS e refatorou-o um pouco.
* Melhorou a matriz de material SSS e a geração de índice para o pós-processo.
* Melhorou os artefatos de filtragem de espessura SSS calculando um melhor deslocamento normal.
* Incluiu a classe MeshHairRenderStageSelector no projeto.
* Aumento do número permitido de dígitos para a força especular do cabelo a três.
* Integrado correto, o espaço mundial normaliza para o cálculo de transmissão SSS.
* Integrado jittering do tamanho do kernel opcional para quebrar os artefatos de bandagem. Melhorou a randomização de rotação. Removido algum código obsoleto.
* Geração de kernel de dispersão de espaço de tela integrada. Substituiu o parâmetro "Quality" com "SampleCount".
* Suporte integrado para gerar um buffer de índice de material de dispersão subsuperfície que é consumido pelo processo de postagem SSSS.
* Integrado os parâmetros editáveis para o modelo de sombreamento. Suporte de transmissão implementado para sombras PCF.
* Pequena simplificação de código.
* Pouco refatoring na característica do modelo de cabelo especular.
* Feito "SpriteBase.xksl" sempre escrever zero para todos os alvos de renderização, a fim de evitar regiões de framebuffer uninitializadas (para evitar ter um índice de material SSS no céu).
* Feito todos os materiais escrevem para o buffer de índice de material SSS.
* Tornou possível habilitar/desativar a deduplicação do material SSS. Limpe e comenta o código.
* Multisampling feito ficar desativado quando OpenGL ES 2 está sendo usado. Registo adicionado para ajustes do nível de multisampling.
* Fez a geometria do cabelo opaco renderizar usando o RenderStage "Opaque" e removeu o RenderStage "HairOpaque" do ForwardRenderer.
* Feito a iluminação do cabelo especular atenuada por alfa, assim regiões transparentes não exibem reflexos especulares.
* Feito o pós-processo SSS ser ignorado se nenhum material de dispersão é visível.
* Fez o trabalho pós-processo SSSS exatamente para viewports não-quadrados também. Refactored o código. Desativado o código do shader de depuração. Corrigido as coordenadas de espaço de clip invertido.
* Feito o recurso de material de transparência é ignorado se o corte de cabelo está ligado para evitar problemas.
* Refactoring menor no código do cabelo.
* Misturas SSS deslocadas para uma subpasta.
* Moveu a estrutura "MaterialHairSurfaceData" para o shader de cabelo especular porque só é necessário lá agora. Renomeado "MaterialHairSurfaceData.xksl" para "MaterialHairShared.xksl".
* Moveu a conversão de ângulo para o lado da CPU.
* Moveu a definição do kernel de dispersão de espaço de tela (para SSSS) fora do shader.
* Moveu os arquivos de código de mistura do shader do cabelo para as subpastas corretas. Renamed alguns shaders e classes.
* Moveu o código de mistura do shader do cabelo em subpastas para uma melhor visão geral.
* Movido o código de processamento de post SSSS para a pasta correta dentro do projeto.
* OpenGL: Regressão fixa onde texturas de profundidade usadas como SRV foram criadas como buffers de renderização em vez de texturas.
* Portado e integrado a maioria das funções de sombreamento de cabelo difuso e especular de Mizuchi. Parâmetros do editor implementados.
* Falta acolchoado SpriteBatch.bytecodeSRgb.Vulkan.Level\_9\_1.cs
* Sombra falsa refactored em uma opção drop down com parâmetros de acompanhamento. Removido código obsoleto.
* Direção de cabelo refactored (tangent/bitangent) e opções de sombreamento/armazenamento em opções drop-down com parâmetros de acompanhamento. Removido código obsoleto.
* Refactored o código.
* Refactored o código de renderização do cabelo. Propriedades ajustadas. Implementado "GetHashCode()" para todas as classes de cabelo. Removido código obsoleto. Flutuante substituído4 com flutuador3 em shaders.
* Refactored os shaders do cabelo. Substituições implementadas para PrepareForLighting AndShading e suporte integrado para mapas de ruído usando ComputeColor.
* Refactored a classe HairRenderFeature. Multithreaded algum código.
* Refatizou a classe MSAAResolver simplificada. Fez o MSAAResolver ficar sempre ligado para se livrar do código redundante e para tornar as configurações do editor mais óbvias.
* Refactored o código do shader de cálculo de espessura SSS.
* Refactored a geração de matriz de material SSSS, de modo que o array de material fica alocado apenas uma vez na inicialização e a partir de então em é modificado apenas.
* Refatoração e limpeza. Removido código duplicado e redundante.
* Refactoring. Livrei-me do código duplicado. Ligeiramente mudou a iluminação ambiental. Implementou a opção para o modelo de sombreamento usando um enum.
* Reimplementado o cabelo "tag" como um parâmetro Chave para que as malhas de cabelo podem ser filtradas corretamente. Atualizado o RenderStageSelectors.
* Reimplementado a renderização do cabelo usando o novo recurso multipass. Corrigido alguns problemas de corte de cabelo. Reforçada a iluminação ambiental especular usando IMaterialSpecularMicrofacetEnvironmentFunction.
* Reimplementou o SSS como um recurso de material separado. Parâmetros de material obsoleto removidos.
* Remover unused built-in shader bytecode
* Removido uma linha comentada de código de depuração.
* Removido um projeto incluem.
* Removido uma linha obsoleta de código.
* Removido código morto.
* Removido código obsoleto de "MaterialSurfaceShadingDiffuseHair.xksl".
* Removido fases de renderização de cabelo obsoleto de "ForwardRenderer".
* Removido o código de renderização de cabelo obsoleto.
* Removido o código do shader obsoleto. Comentários atualizados. Moveu o ponto de extensão do shader "AfterLightingAndShading()".
* Removido o código de corte de cabelo redundante.
* Removido algum código obsoleto de "MaterialSurfaceShadingSpecularHair.xksl".
* Removeu a classe "MaterialSurfaceShadingSharedHairKeys" e substituiu seu parâmetro "IsHair" com "PassID".
* Removeu a palavra-chave "override" de "FilterThickness()".
* Removido o código manual de filtragem de espessura PCF após confirmar que não há diferença visual em comparação com tomar uma amostra interpolada.
* Removido o Fresnel obsoleto, Visibilidade e misturas de distribuição & propriedades da característica do modelo de cabelo.
* Removido os parâmetros do kernel de dispersão de Material.cs e armazenado-los usando parâmetros de material em vez. Alguns refatoring & bugfixing.
* Removido não usado inclui dos shaders de sombreamento de cel e removeu o código duplicado.
* Removeu parâmetros não utilizados de "LightDirectionalShadowMapRenderer.cs".
* Remover parâmetros não utilizados de "LightSpotShadowMapRenderer.cs".
* Renamed "MaterialHairLightAttenuationFunctionDefault" to "MaterialHairLightAttenuationFunctionDirectional".
* Renomeou um parâmetro do processo de postagem SSSS.
* Renamed algumas classes SSS e shaders. Mudou a forma como o mapa de força de dispersão é tratado.
* Renomeou a propriedade "Fake shadowing function" para "Light attenuation function" e adicionou comentários.
* Substituiu IComputeColor com IComputeScalar para os mapas de ruído de cabelo.
* Separou o kernel de dispersão como uma configuração adicional, independente do perfil de dispersão.
* Simplificou o código usando variáveis de fluxos existentes. Implementou a configuração "UseTangent". Adicionadas explicações e intervalos numéricos para propriedades.
* Simplificou o código de sombra e espessura do PCF.
* Simplificou o código de filtragem de espessura do mapa de sombra.
* Especifique intervalos numéricos corretos para os parâmetros do modelo de sombreamento SSS e userdocs adicionados e resumos. Tornou possível alterar parâmetros SSS sem esperar por uma recompilação de shader.
* Desativado temporariamente o array "scatteringWidths" para o processo de postagem SSSS. Implementado um descarte para materiais com um índice de material de zero.
* Integração temporária de renderização de cabelo usando três passes de renderização (opaco, costas transparentes, frente transparente), que exibe cintilação.
* Atualizar fonte para combinar nova API de passe de material
* Atualizou um comentário desatualizado sobre suporte a MSAA.
* Comentários atualizados no código SSS.
* Atualizou o valor padrão de "Translucência" SSS para que ele combine com a demo SSSS & Mizuchi.

### Gráficos. Testes

* Versão de imagem de ouro do Bump (mudanças de compressão doskybox)

### Importador.FBX

* Adicione suporte para animação parcial de vetores (use o valor padrão em vez de 0 para curvas de animação em falta de componente).

### Entrada

* Adicione o mapeamento de teclas de teclado ausente para Android.
* Android: Corrigir problema com a lista PointerPressed/Released sendo constantemente vazia (atualização foi realizada duas vezes).
* Várias correções para sensor de orientação no Android (cortesia de Pierre)
* VirtualButton: adicione métodos IsDown/Pressed/Released. Criar VirtualButton. Aulas pontuais. Faça construtores protegidos para que os tipos possam ser herdados. Melhore o código.

### Entrada. Testes

* Corrigir problemas de compilação.

### Instalar

* Biblioteca portátil removida de pré-requisitos
* Removido não usado BuildTools_MSBuildNuget.msi

### Lançador

* Adaptado para suportar novos pacotes nuget
* Fix auto-atualização desde a mudança para NuGet 4.0
* Fixo com novo sistema de compilação
* Reorganizar as configurações (sem mais loja. config, porque podemos ter Xenko da instalação do pacote em vez do Launcher) e melhor detecção de pacotes dev no lado do servidor

### Misc

* Cereja-pick manu/nuget3 ramo
* Corrigido o arquivo do projeto do motor.
* Resolveu o conflito de mesclagem no arquivo "SiliconStudio.Xenko.Engine.csproj".
* Reverter "\[Build\] Override SiliconStudioXenkoOutputPath mesmo se definido"
* Reverter "\[Skin/Hair\] Esconder parâmetros de cabelo / pele até trabalhar corretamente"
* Atualizado o ano no aviso de direitos autorais.

### MSBuild

* Detecção melhorada do MSBuild para usar a versão instalada em vez de cópia anget local
* MSBuildLocator: Executá-lo somente se os conjuntos MSBuild não detectados (eles podem ser carregados se executados como parte do MSBuild)
* Atualizado de 15.5.180 a 15.6.82

### Nativo

* Compute XenkoNativeOutput.Link somente quando OutputPath é corretamente computado (ao lado de um alvo)

### OpenGL

* Corrigir para "Requested renderbuffer não é nem um alvo de renderização nem um apego de profundidade / estêncil." problema ao usar efeitos postais de aberto GL.

### Pacote

* Pasta de ferramentas acolchoadas (necessário para packageinstall.exe)

### Pacotes

* Baixar relatório e pacote instalador fixo com NuGet 4.0
* Colisão potencial do espaço de nomes futuro
* Várias melhorias para fazer novo sistema nuget funciona melhor

### Física

* Corrigir acidente no motor de física quando as formas de colisão são removidas da cena e descarregadas durante o mesmo quadro.

### Pré-requisitos

* Readd Microsoft.Net.Component.4.6.1.TargetingPack to MSBuild prerequisites

### Apresentação

* Remover um InvalidCastException em AssetFromFileTemplateGenerator

### Visualização

* Corrigir a visualização de textura no caso de a textura não tem nenhum canal alfa.

### Renderização

* Adicione informações da variável shader EyeIndex e EyeCount através do novo shader GlobalVR.
* Adicione suporte para a textura 2D panorâmica como entrada 3D de BackgroundComponent.
* Adicione a possibilidade de selecionar o modo de mistura sprite do Game Studio.
* Corrigir problema de renderização de tela preta quando os efeitos pós são usados sem espelho de textura VR.
* Melhore a robustez FastTextRenderer. Realloque buffer quando o número máximo de caracteres é excedido.
* Gamas de recursos foram misturados com dados quando a computação satrt compensa
* Pele: remover a declaração de SV_Target* quando não usado, e usar outro mecanismo para detectar se o índice de material MRT é necessário
* Temporal AA (Velocity Buffer cortesia de Guus)

### Amostras

* Corrigir a compilação da amostra VR.

### Editor de cenas

* Adicione a forma física de depuração para planos infinitos.
* Não ignore a profundidade enquanto escreve o gyzmo física.

### Scripts

* Bloqueio removido entre ScriptsourceFileAssetViewModel.Document Id e UpdateAssetFromSource (não pode parecer reproduzir XK-5104)
* Ao criar um script, "você quer salvar" diálogo não fez o que era suposto fazer

### Serialização

* Corrigido faltando informações genéricas ao inicializar serializador pai

### Shaders

* Explicitamente qualificar-se Notas namespace para evitar conflitos futuros com Xenko. Core.Notações namespace.
* Removedor de glsl-optimizer (causando alguns problemas no Android)
* Colisão potencial do espaço de nomes futuro

### SharpDX

* Atualizado em NuGet versão 4.0.1

### Pele

* Alterações adicionais para trabalhar com o novo sistema MRT

### Pele/Hair

* Adicionado upgrader de pacote para log de efeito (novo parâmetro genérico para direcional luz sombra caster)
* Transmissão computacional é agora definida nos parâmetros da sombra da luz
* Ocultar parâmetros de cabelo / pele até trabalhar corretamente
* Melhore o upgrader de pacotes para trabalhar em qualquer arquivo xkeffectlog (em vez de apenas o padrão)

### Skybox

* Melhorador para SkyboxShaderCubemap renomeando em effectlog

### Loja

* Alterado como os caminhos do pacote são detectados

### Streaming

* Fix acidente acontecendo quando uma textura foi usada simultaneamente como fundo e vídeo alvo.

### Modelos

* Movido ProjectTemplateGeneratorHelper.cs para Xenko. Activos

### Testes

* Pacotes Bumped
* Pacotes Bumped & pacote ajustado upgrader versão verificação

### TexTool

* Fix Rescaling de 16bits pixel único canal texturas.

### Atualização

* Resolução de caminho adicionada para ParameterCollection/Parameter Chaveiro

### Instruções de utilização

* renomear glossiness -> gloss, mais natural Inglês
* atualizar as etiquetas de ativos e componentes de fundo e userdocs

### Vídeo

* Adicionado SharpDX.MediaFoundation para projetos UWP
* Adicionado suporte para renderização de vídeo (Windows e Android apenas por agora)
* Montagem de vídeo adicionada para testes de unidade
* Certifique-se de que o formato de arquivo de vídeo é mp4 no Windows.
* Corrigir instruções de pré-processamento #ifdef em arquivos ffmpeg e tornar a API gráfica de montagem dependente.
* Mantenha-se em sincronia com o ramo de recursos
* Tire as informações do STEREO3D side_data quando presente durante a compilação de vídeo na janela.

### Vídeo/Audio

* Mantenha-se em sincronia com o ramo de recursos

### Visualize

* Corrigir referências de projeto

### RV

* Adicionar implementação de Recenter para DummyDevice e OpenVR.
* Seguir o sensor de orientação (cortesia de Pierre)

### VSPackage

* Fix vsix construir com novo sistema csproj

### Yaml. Testes

* Corrigir testes de unidade usando recursos embarcados

## Mudança

### Versão 3.0.0.4 — 25 de agosto de 2018

* Reativar o suporte da plataforma Linux [#17](https://github.com/xenko3d/xenko/issues/17)
* Suporte SourceLink: Baixar Visual Studio Código fonte de depuração Xenko na demanda [#79](https://github.com/xenko3d/xenko/issues/79)
* Suporte de realidade mista do Windows para UWP [#85](https://github.com/xenko3d/xenko/pull/85)
* Fix GameStudio falha ao editar arquivos com o editor de código simples [#110](https://github.com/xenko3d/xenko/issues/110)
* GameStudio: Novo tema escuro e ícones de glifos [#4](https://github.com/xenko3d/xenko/issues/4) [#50](https://github.com/xenko3d/xenko/issues/50)
