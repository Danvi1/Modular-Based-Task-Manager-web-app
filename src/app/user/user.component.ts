import { Component, computed, EventEmitter, Input, input, Output } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
    // @Input({ required: true }) avatar!: string;
    // @Input({ required: true }) name!: string;
    avatar = input.required<string>();
    name = input.required<string>();
    id = input.required<string>();
    @Output() select = new EventEmitter();

    imagePath = computed(() => 'assets/users/' + this.avatar());

    onSelectUser(){
        console.log("clicked");
        this.select.emit(this.id());
    }
}
