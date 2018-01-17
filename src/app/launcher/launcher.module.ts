import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StepIndicatorComponent } from './step-indicator/step-indicator.component';
import { WizardComponent } from './wizard.component';
import { InViewportModule } from '@thisissoon/angular-inviewport';
import { MissionRuntimeStepComponent } from './mission-runtime-step/mission-runtime-step.component';
import { TargetEnvironmentStepComponent } from './targetenvironment-step/target-environment-step.component';
import { GitProviderStepComponent } from './gitprovider-step/gitprovider-step.component';
import { ReleaseStrategyStepComponent } from './release-strategy-step/release-strategy-step.component';
import { ProjectSummaryStepComponent } from './project-summary-step/project-summary-step.component';


@NgModule({
  imports: [
    CommonModule,
    InViewportModule
  ],
  exports: [
    WizardComponent
  ],
  declarations: [
    StepIndicatorComponent,
    WizardComponent,
    MissionRuntimeStepComponent,
    TargetEnvironmentStepComponent,
    ReleaseStrategyStepComponent,
    GitProviderStepComponent,
    ProjectSummaryStepComponent
  ]
})
export class LauncherModule {
  constructor() {}
}