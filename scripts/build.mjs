import {mkdir,copyFile,cp} from 'node:fs/promises';
await mkdir('dist',{recursive:true});for(const file of ['index.html','style.css'])await copyFile(file,'dist/'+file);for(const directory of ['src','examples','docs'])await cp(directory,'dist/'+directory,{recursive:true});console.log('Static research workspace built in dist/. Serve on localhost or HTTPS.');
