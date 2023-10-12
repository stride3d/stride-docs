# Notas de lançamento do Xenko 1.4

## Destaques

### Renaming

O motor foi renomeado Xenko. Aqui está o nosso novo logotipo, não se esqueça disso!

<img src="media/ReleaseNotes-1.4/xenko-logo.png" align="center" />

As seguintes mudanças foram introduzidas durante o renaming e serão automaticamente aplicadas ao seu projeto ao abri-lo no Game Studio.

- Todas as ocorrências de ‘Paradox’ em código, shaders e arquivos de configuração são substituídas por ‘Xenko’
- Pacote e arquivos de ativos, anteriormente tendo uma extensão de arquivo .pdx*, agora tem uma extensão .xk*
- Xenko SDK está agora localizado usando o SiliconStudioXenko Dir variável ambiente em vez de SiliconStudioParadoxDir

Além disso, a nova integração do Visual Studio não reconhecerá antigas instalações ou projetos que não foram atualizados e vice-versa.

### Novo sistema de documentação

Estamos cientes de que nossa documentação não é onde precisamos ainda, então decidimos tomar alguns passos para mover as coisas mais rápido. Para fazer isso, migramos nossa documentação para o DocFX.

O novo sistema deve fornecer melhor legibilidade e formatação mais consistente. Ele também nos permite editar e fazer upload de documentação separada para cada versão do Xenko.

A documentação tem seu próprio repositório no GitHub: https://github.com/SiliconStudio/xenko-docs

Todos na comunidade agora podem compartilhar informações adicionando edições que nos ajudarão a melhorar continuamente a documentação. Para editar a documentação, basta clicar no botão “Melhor este Doc” disponível em cada página da documentação e nos enviar pull requests.

<img src="media/ReleaseNotes-1.4/newdoc-docfx.png" align="center" />

Com sua ajuda, esperamos melhorar a experiência da comunidade com Xenko, pois isso permitirá que as pessoas compartilhem informações em um ritmo mais rápido.

Claro, a equipe de Xenko dev. também vai adicionar mais à documentação também. Mais informações sobre isso em breve!

### Depuração de PDB

Agora você pode entrar no código fonte do motor de Xenko. O código será automaticamente retirado do GitHub.

O processo é simples. Tudo o que você precisa fazer é abrir o Visual Studio opções, ir para Debugging > Geral, e verificar “Ativar Suporte ao Servidor de Fonte”:

<img src="media/ReleaseNotes-1.4/pdb_vs_sourceserver.png" align="center" />

### Sprite Studio (mudança quebrando)

O formato XML usado para importar modelos e animação foi atualizado para usar a versão mais recente do Sprite Studio, em vez do formato do exportador legado usado anteriormente.
Com este novo formato, recomendamos que você copie todo o seu projeto Sprite Studio (todos os arquivos são necessários) na pasta RawAssets do seu projeto Xenko. Consulte o jogo de amostra para obter detalhes.

## Versão 1.4.0-beta

Data de lançamento: 2015/12/01

### Melhorias

#### Editor

- A cor principal agora é azul em vez de roxo.
- Melhor gestão da lista de projetos recentes, especialmente quando se trabalha com várias versões do Xenko.

#### Activos

- Os ativos foram previamente versionados individualmente, mas a partir de agora eles vão combinar mais de perto as versões Xenko. Isso permitirá atualizações de ativos em todo o pacote, suporte ao plugin mais fácil e suporte ao copy-paste entre diferentes versões Xenko.
- Mudamos o compilador de um modelo de domínio por aplicativo para um modelo por processo (semelhante a MSBuild.exe), para evitar quaisquer problemas relacionados a variáveis de ambiente, diretório de trabalho atual e código C++ sem conhecimento com estática que pode ser usada.

### Questões corrigidas

#### Editor

- Corrigido um problema ao inserir um ativo na hierarquia de cena
- Corrigido um problema ao renomear uma pasta no explorador de soluções
- Definir adequadamente o valor da variável ‘SolutionDir’ ao construir um jogo do estúdio

#### Motor

- Corrigido um problema com sombras para luzes exatas que estavam usando projeção ortográfica em vez de perspectiva.

#### Activos

- Corrigido o acidente de compilação de ativos quando o caminho de instalação Xenko contém o caractere ‘##’.
- Permitir nomes de ativos para conter o caractere de período ‘.’

### Questões conhecidas

- o iOS tem um problema de acidente excelente após alguns segundos, especialmente nos dispositivos recentes (iPhone 6s). Isto está sob investigação.
