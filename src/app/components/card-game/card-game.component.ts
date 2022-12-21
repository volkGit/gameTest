import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
    selector: 'app-card-game',
    templateUrl: './card-game.component.html'
})
export class CardGameComponent {
    show: boolean = false
    @Output() setText = new EventEmitter<string>()
    @Output() updateShow = new EventEmitter()
    @Input() srcLink!: string
    @Input() showBtn!: boolean

    constructor(private modalService: ModalService) {}

    startDemo() {
        this.modalService.open()
        this.setText.emit('Запустить демо')
    }

    startGame() {
        this.modalService.open()
        this.setText.emit('Запустить игру')
    }

    updateShowBtn() {
        this.updateShow.emit()
    }
}
