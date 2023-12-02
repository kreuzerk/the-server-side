import {
  ChangeDetectionStrategy,
  Component, effect,
  inject,
  Injector,
  Input,
  numberAttribute,
  OnInit, runInInjectionContext,
  Signal
} from "@angular/core";
import {CrewMember, CrewMembersService} from "./crew-members.service";
import {toSignal} from "@angular/core/rxjs-interop";
import {JsonPipe} from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-crew-members',
  template: `
      @if (crewMember && crewMember(); as c) {
          <h1>{{ c.name }}</h1>
          <img [src]="c.image" [alt]="c.name" />
      }
  `,
  imports: [JsonPipe],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export default class CrewMembersComponent implements OnInit {
  @Input({transform: numberAttribute}) id!: number;

  private injector = inject(Injector);
  private crewMembersService = inject(CrewMembersService);
  crewMember: Signal<CrewMember | undefined> | undefined;

  ngOnInit(): void {

    runInInjectionContext(this.injector, () => {
      this.crewMember = toSignal(this.crewMembersService.getCrewMember(this.id));
    });
  }
}
