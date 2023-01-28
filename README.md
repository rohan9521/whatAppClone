# FileSysOrganizer
List of Commands
1. tree -> displays hierarchical struture of files and folder.
2. organize -> creates a folder Named 'Organised Folder'.
3. help -> displays list of commands and there use. 

tree command shows the files and folder inside root folder in  a tree like structure
usage -> fsys tree
example output->
fsys tree
        |__FileSystem
                |__.git
                        |__HEAD
                        |__branches
                        |__config
                        |__description
                        |__hooks
                                |__applypatch-msg.sample
                                |__commit-msg.sample
                                |__fsmonitor-watchman.sample
                                |__post-update.sample
                                |__pre-applypatch.sample
                                |__pre-commit.sample
                                |__pre-merge-commit.sample
                                |__pre-push.sample
                                |__pre-rebase.sample
                                |__pre-receive.sample
                                |__prepare-commit-msg.sample
                                |__push-to-checkout.sample
                                |__update.sample
                        |__index
                        |__info
                                |__exclude
                        |__objects
                                |__10
                                        |__868198268f35cc3280cf01ec5a2695555a089a
                                |__30
                                        |__249e9da8fc9eeb9d7396d12ff80d3ac6d5e19d
                                |__3f
                                        |__e3b6668822be42217fe7f3639f2a430ca87973
                                |__5a
                                        |__45362348ba5a928e457667de35587cd1f8b12b
                                |__63
                                        |__134f4e9f8cf473b6ee0d779342e97ef6f65939
                                |__9c
                                        |__79c60afe7d32eb1fa5bb3c0db362085d16b5a8
                                |__e0
                                        |__c4777aed825a3de07bb198cc05e16d44f75863
                                |__e9
                                        |__d0acff179d3f179a26e7771af5db464a2ecd8a
                                |__info
                                |__pack
                        |__refs
                                |__heads
                                |__tags
                |__FileSystem.js
                |__Help.js
                |__Organize.js
                |__README.md
                |__Tree.js
                |__Utility.js
                |__package.json



organise command organizes the files of the root folder in to the below mentioned categories and makes a perticular folder for that category and moves files belonging to that category into it.

    media : ['mp4','mkv'],
    app: ['apk','deb','pkg','exe'],
    documents : ['docx','pdf','xlsx','odt','odp','odg',
                'odf','txt','ps','tex','doc','xls','ods'],
    archives : ['zip','7z','tar','gz','ar','iso','xz','rar'],
    images : ['jpeg','jpg','png']
usage -> fsys organize


help commmand shows the list of all available commands under fsys
usage -> fsys help 

