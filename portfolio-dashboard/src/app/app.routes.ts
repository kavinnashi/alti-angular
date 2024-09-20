import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'form',
        loadComponent: () => import("./form-content/form-content.component").then((m) => m.FormContentComponent)
    },
    {
        path: 'chart',
        loadComponent: () => import("./chart-content/chart-content.component").then((m) => m.ChartContentComponent)
    },
    {
        path: 'list',
        loadComponent: () => import("./list-content/list-content.component").then((m) => m.ListContentComponent)
    },
    { path: '', redirectTo: 'form', pathMatch: 'full' }
];