const UI=require('./ui');
const Github=require('./github');
const{client_id,client_secret}=require('./config.json');

//instanciando Clases
const github=new Github(client_id,client_secret);
const ui=new UI();

//console.log(github.peticionGithub('luiguimon007'));
//DOM
const userForm=document.getElementById('userForm');
//eventos
userForm.addEventListener('submit',(e)=>{
  //console.log("Enviando");
  e.preventDefault();
  const textSearch=document.getElementById('textSearch').value;
  if(textSearch!==''){
    github.peticionGithub(textSearch)
      .then(data=>{
        if(data.userDatos.message === 'Not Found'){
          //alert("Usuario no existe");
          ui.showMessage("Usuario no existe",'alert alert-danger mt-2 col-md-12');
        }else{
          ui.showProfile(data.userDatos);
          ui.showRepositories(data.respositorios);
        }
      });
    //
  }else{
    ui.limpiar();
  }

});
