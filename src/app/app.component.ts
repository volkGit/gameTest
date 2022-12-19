import { Component, OnInit } from '@angular/core';
import { Game } from './models/game';
import { ModalService } from './services/modal.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    title = 'card-test'
    modalText: string = ''
    initComponents: Game[] = [] 

    constructor(public modalService: ModalService) {
    }

    ngOnInit() {
        for (let i = 0; i < 42; i++) {
            this.initComponents.push({
                src: '/assets/images/mk.jpeg'
            })
        }
    }

    setText(text: string) {
        this.modalText = text
    }
}
