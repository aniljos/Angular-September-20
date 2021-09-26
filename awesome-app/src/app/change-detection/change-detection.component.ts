import { Component, Input, OnInit } from '@angular/core';

//Model
class SimpleModel{
  id: number = 10;
}
@Component({
  selector: 'app-change-detection',
  templateUrl: './change-detection.component.html',
  styleUrls: ['./change-detection.component.css']
})
export class ChangeDetectionComponent implements OnInit {

  public model : SimpleModel = new SimpleModel();
  constructor() { }

  ngOnInit(): void {
  }

  update(){
    this.model.id = this.model.id * 2;
  }

}

@Component({
  selector: "simple-model",
  templateUrl: './simple-message.component.html'
})
export class SimpleMessageComponent{

  @Input() data: SimpleModel = new SimpleModel();

  constructor(){
    
  }
}
