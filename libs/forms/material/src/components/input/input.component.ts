import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  Injector,
  Input,
  OnInit,
  SkipSelf,
} from '@angular/core';
import { FormGroup } from '@angular/forms';
import { DynControl, DynControlConfig } from '@matheo/dyn-forms/core';

@Component({
  selector: 'dyn-material-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent extends DynControl implements OnInit {
  static dynControl = 'TEXT';

  @Input() config!: DynControlConfig;

  constructor(
    injector: Injector,
    @Inject(DynControl)
    @SkipSelf()
    public readonly parent: DynControl<DynControlConfig, FormGroup>
  ) {
    super(injector);
  }

  ngOnInit(): void {}
}