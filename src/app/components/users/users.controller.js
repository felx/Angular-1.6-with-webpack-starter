class UsersCtrl {
  constructor(UsersService) {
    this.name = 'users';
    this.UsersService = UsersService;
  }

  getData(){
  	this.UsersService.get().then(res => this.data = res);
  }

  $onInit(){
  	this.getData();
  }
}

export default UsersCtrl;
