import { Routes } from '@angular/router';
import { RandomComponent } from './random/random.component';
import { ControlFlowComponent } from './control-flow/control-flow.component';
import { DataFunctionsComponent } from './data-functions/data-functions.component';

export const routes: Routes = [
    { path: '', redirectTo: '/control-flow', pathMatch: 'full' },
    { path: 'control-flow', component: ControlFlowComponent },
    { path: 'data-functions', component: DataFunctionsComponent },
    { path: 'random', component: RandomComponent }
];
