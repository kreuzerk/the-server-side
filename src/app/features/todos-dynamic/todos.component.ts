import {Component, inject, Injector, runInInjectionContext, Signal} from "@angular/core";
import {toSignal} from "@angular/core/rxjs-interop";
import {JsonPipe} from "@angular/common";
import {TodosService} from "../../core/todos.service";

@Component({
  standalone: true,
  selector: 'app-todos',
  template: `
      <h1>Todos</h1>
      @for (toto of todos();track $index) {
          {{ toto | json }}
      }
      <button (click)="fetch()">Fetch todos</button>
  `,
  imports: [JsonPipe]
})
export default class TodosComponent {
  todos!: Signal<any>;
  private injector = inject(Injector);

  fetch(){
    runInInjectionContext(this.injector, () => {
      this.todos = toSignal(inject(TodosService).getTodos(), {initialValue: []});
    });
  }
}
