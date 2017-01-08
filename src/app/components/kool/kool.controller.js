class KoolCtrl {
  constructor(KoolService) {
    this.name = 'kool';
    this.KoolService = KoolService;
  }

  getData(){
  	this.KoolService.get().then(res => this.data = res);
  }

  $onInit(){
  	this.getData();
  }
}

export default KoolCtrl;
