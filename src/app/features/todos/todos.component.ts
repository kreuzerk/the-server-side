import {Component, inject} from "@angular/core";
import {TodosService} from "../../core/todos.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {JsonPipe} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-todos',
  template: `
      <h1>Todos</h1>
      @for (toto of todos();track $index) {
          {{ toto | json }}
      }
  `,
  imports: [JsonPipe]
})
export default class TodosComponent {
  todos = toSignal(inject(TodosService).getTodos());
}
