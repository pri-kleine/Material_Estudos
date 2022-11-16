# Git e Github

## Comandos Básicos para usar no terminal
(W - Windows; L - Linux)

Ação solicitada | Windows | Linux
:--------------:|:-------:|:----:
Listar pastas | dir | ls |
Navegar no diretório base | cd/ | cd/ |
Navegar em uma pasta específica | cd nomePasta | cd nomePasta 
Retroceder uma pasta | cd .. | cd ..
Limpar a tela | cls (clear screen) | clear
Autocompletar | tab | tab
Criar uma pasta | mkdir | mkdir
Atalho para gravar um texto dentro de um arquivo | echo texto > nomeArq.txt | echo texto > nomeArq.txt
Deletar todos os arquivos dentro de uma pasta |    | del nomePasta
Deletar reposítório | rmdir nomePasta /S /Q ; L - rm -rf nomePasta (rm -remove director)
Mostrar caminho completo do diretório |    | pwd
Mover um arquivo para uma pasta |    | mv nomeTexto.txt ./nomePasta/


## SHA1

>Gera um conjunto de caracteres identificadores de 40 dígitos

`openss1 sha1 texto.txt`
###retorna:
`SHA1 (texto.txt) =` ....


## Obj internos do Git
>Blob - os aquivos serão gravados nos Blobs, juntamente com os metadados deste arquivo (tamanho, \0, SHA1 e conteúdo)

* Usando comando do Git
`echo 'conteudo' | git hash-object --stdin`
	###retorna o SHA1  

* Usando openss1
echo -e 'conteudo' | openss1 sha1
	###retorna o SHA1 (diferente da anterior)

Para usar openss1 e retornar o SHA1 igual ao do primeiro item que é pelo comando GIT
`echo -e 'blob9\0conteudo' | openss1 sha1`
	###blob9\0 - são metadados do arquivo

>Trees - armazena os Blobs e os nomes dos arquivos. tem seu próprio sha1
>Commits - objeto com todas as informações. Aponta para uma árvore, para o  parente (último commit antes dele), autor, mensagem e timestamp (data, hora que foi criado) e tem seu próprio sha1.


## Chave SSH e Token

- Escrever no GiBash
`$ ssh-keygen -t ed25519 -c priscillakleine@gmail.com`
    
###.. depois de gerada, vai pra pasta .ssh - ex:
`cd /c/Users/pkbio/.ssh`
`$ ls` 
    
`$ cat id_ed25519.pub`
    ###vai retornar a chave ssh do Git

- Na página do Github, no item SSH keys - Coloca um titulo da chave (ex: minha maq windows) e cola a chave
- No Git Bass, na pasta .ssh
`$ eval $(ssh-agente -s)`
    ###retorna a info sobre o agente está rodando
`Agend pid 1382 .... ` ###numero muda

`$ ssh-add id_ed25519` ###usar a chave privada
    ###pergunta password e retorna:
`Identify added: id_ed25519`


## Iniciando o Git e criando um commit

- `ls -a` - mostra todos os aruivos incluse de uma pasta oculta

- Configuração
 `git config —global [user.email](http://user.email) “priscillakleine@gmail.com”`
`git config —global [user.](http://user.email)name` ###"PriK”
`git init` ###cria-se um repositório
`git add *`
`git commit -m “commit inicial”`


## Passo a passo no ciclo de vida

>Untracked | Unmodified | Modified | Staged

`git status` - mostra o status dos arquivos
`git add x.txt yyy/` - nome do arquivo x.txt e da pasta yyy
`git add *` - adiciona todos os arquivos para staged
`git commit -m ”uma mensagem aqui”`


## Trabalhando com o Github

- Criar novo repositório e copiar http
- Fazer commit dos arquivos novos
`git remote add origin [https://github.com/pri-kleine/Aulas_Git.git](https://github.com/pri-kleine/Aulas_Git.git)`
`git branch -m main` - renomei a branch master para main
`git push origin main` - para enviar os arquivos


## Como os conflitos acontecem no github e como resolvê-los

- Para puxar o que está no Github - 
    `git pull origin main` (ou master)
- olha o q tem de diferença, edita, depois `git add *` , `git commit - m “resolvendo conflitos”` e manda pro Github com `git push origin main` (ou master)
- para clonar o repositorio - 
    `git clone http://github.com/…` (... = a url de clonar seu repositorio)