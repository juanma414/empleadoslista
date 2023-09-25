import {Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-count-empleados',
  templateUrl: './count-empleados.component.html',
  styleUrls: ['./count-empleados.component.css']
})
export class CountEmpleadosComponent {
  @Input() todos: number;
  @Input() femenino:number;
  @Input() masculino: number;
  @Output() countRadioButtonChange = new EventEmitter<string>();
  radioButtonSelecionado='Todos'

  constructor() {
    this.todos=0;
    this.femenino=0;
    this.masculino=0;
  }
  radioChange(){
    this.countRadioButtonChange.emit(this.radioButtonSelecionado)
  }

}
