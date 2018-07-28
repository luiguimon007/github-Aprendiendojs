class Github{
  constructor(clientId,clientSecret){
    this.client_id=clientId;
    this.client_secret=clientSecret;
    this.repos=7;
    this.repos_sort='created:asc';
  }
  async peticionGithub(user){
    //pedir recurso fetch
    const userDataRequest=await fetch(`http://api.github.com/users/${user}?client_id=${this.client_id}&
      client_secret=${this.client_secret}`);
    //traer datos
    const repositoriesRequest=await fetch(`http://api.github.com/users/${user}/repos?client_id=${this.client_id}&
      client_secret=${this.client_secret}&per_page=${this.repos}&sort=${this.repos_sort}`);
    const respositorios=await repositoriesRequest.json();
    const userDatos=await userDataRequest.json();
    //console.log(userDatos);
    return {
      userDatos,
      respositorios
    }
  }
}
module.exports=Github;
//exportando clase Github
